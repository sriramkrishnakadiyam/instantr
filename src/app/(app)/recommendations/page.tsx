'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SidebarInset } from '@/components/ui/sidebar';
import {
  getPersonalizedRecipeBlurbs,
  type PersonalizedRecipeBlurbsOutput,
} from '@/ai/flows/personalized-recipe-blurbs-flow';
import { cuisines } from '@/lib/data';
import { Sparkles, Loader2, Heart, Lightbulb } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  cuisine: z.string().min(1, 'Please select a cuisine.'),
  favoriteIngredients: z.string().optional(),
  dietaryPreference: z.enum(['Veg', 'Non-Veg', 'Vegan', 'None']).default('None'),
  spiceLevel: z.enum(['Mild', 'Medium', 'Hot', 'None']).default('None'),
});

const RecommendationSkeleton = () => (
    <div className="mt-8">
        <Skeleton className="h-7 w-1/2 mb-4" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
                <GlassCard key={i} className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <Skeleton className="h-9 w-32" />
                </GlassCard>
            ))}
        </div>
    </div>
);

export default function RecommendationsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [recommendations, setRecommendations] = useState<PersonalizedRecipeBlurbsOutput | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cuisine: 'All',
            favoriteIngredients: '',
            dietaryPreference: 'None',
            spiceLevel: 'None',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setRecommendations(null);
        try {
            const result = await getPersonalizedRecipeBlurbs({
                ...values,
                favoriteIngredients: values.favoriteIngredients?.split(',').map(i => i.trim()).filter(Boolean),
            });
            setRecommendations(result);
        } catch (error) {
            console.error('Failed to get recommendations:', error);
            // In a real app, show a toast notification here
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SidebarInset>
            <AppHeader title="Personalized Recommendations" />
            <main className="flex-1 p-4 md:p-6">
                <GlassCard className="p-6 md:p-8">
                    <div className="mb-6">
                        <h2 className="font-headline text-2xl font-bold">Find Your Next Favorite Meal</h2>
                        <p className="text-muted-foreground">Tell us what you like, and our AI will find recipes tailored just for you.</p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="cuisine"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Preferred Cuisine</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger><SelectValue placeholder="Select a cuisine" /></SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="All">All Cuisines</SelectItem>
                                                    {cuisines.map(c => <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="favoriteIngredients"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Favorite Ingredients</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g., chicken, broccoli, cheese" {...field} />
                                            </FormControl>
                                            <FormDescription>Separate with commas.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="spiceLevel"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Spice Level</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger><SelectValue placeholder="Select spice level" /></SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="None">Any</SelectItem>
                                                    <SelectItem value="Mild">Mild</SelectItem>
                                                    <SelectItem value="Medium">Medium</SelectItem>
                                                    <SelectItem value="Hot">Hot</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dietaryPreference"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Dietary Preference</FormLabel>
                                            <FormControl>
                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex items-center space-x-4 pt-2">
                                                    <FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="None" /></FormControl><FormLabel className="font-normal">None</FormLabel></FormItem>
                                                    <FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Veg" /></FormControl><FormLabel className="font-normal">Veg</FormLabel></FormItem>
                                                    <FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Non-Veg" /></FormControl><FormLabel className="font-normal">Non-Veg</FormLabel></FormItem>
                                                    <FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Vegan" /></FormControl><FormLabel className="font-normal">Vegan</FormLabel></FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" disabled={isLoading} size="lg" className="font-bold">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Finding Recipes...</> : <><Sparkles className="mr-2 h-5 w-5" />Get Recommendations</>}
                            </Button>
                        </form>
                    </Form>
                </GlassCard>

                {isLoading && <RecommendationSkeleton />}

                {recommendations && recommendations.recipes.length > 0 && (
                    <div className="mt-8 animate-in fade-in duration-500">
                        <h3 className="font-headline text-xl font-bold mb-4">Here's What We Found For You:</h3>
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendations.recipes.map((rec, i) => (
                                <GlassCard key={i} className="p-6 flex flex-col">
                                    <h4 className="font-headline text-lg font-semibold">{rec.recipeName}</h4>
                                    <p className="text-muted-foreground mt-2 flex-grow">{rec.aiBlurb}</p>
                                    <Button variant="outline" className="mt-4 self-start">
                                        <Heart className="mr-2 h-4 w-4" /> Add to Favorites
                                    </Button>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                )}
                 {recommendations && recommendations.recipes.length === 0 && !isLoading && (
                    <GlassCard className="mt-8 p-8 text-center">
                        <Lightbulb className="h-12 w-12 mx-auto text-primary mb-4"/>
                        <h3 className="font-headline text-lg font-semibold">No Recipes Found</h3>
                        <p className="text-muted-foreground mt-2">We couldn't find any recipes matching your exact preferences. <br/> Try adjusting your filters for more results.</p>
                    </GlassCard>
                )}
            </main>
        </SidebarInset>
    )
}
