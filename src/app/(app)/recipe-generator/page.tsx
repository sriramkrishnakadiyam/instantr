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
import { SidebarInset } from '@/components/ui/sidebar';
import {
  generateNewRecipe,
  type GenerateNewRecipeOutput,
} from '@/ai/flows/generate-new-recipe-flow';
import { cuisines } from '@/lib/data';
import { Sparkles, RefreshCw, Hourglass, Users, ChefHat } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser, useFirestore, setDocumentNonBlocking } from '@/firebase';
import { collection, doc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  ingredients: z.string().min(3, { message: 'Please enter at least one ingredient.' }),
  cuisine: z.string().min(1, { message: 'Please select a cuisine.' }),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
});

const RecipeResultSkeleton = () => (
    <GlassCard className="p-6 md:p-8 mt-8">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" /> <Skeleton className="h-5 w-24" />
            </div>
            <div className="flex items-center gap-2">
                <Hourglass className="h-5 w-5 text-primary" /> <Skeleton className="h-5 w-20" />
            </div>
            <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" /> <Skeleton className="h-5 w-16" />
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <Skeleton className="h-6 w-1/3 mb-4" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </div>
            <div>
                <Skeleton className="h-6 w-1/3 mb-4" />
                <div className="space-y-3">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                </div>
            </div>
        </div>
    </GlassCard>
);

export default function RecipeGeneratorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [recipe, setRecipe] = useState<GenerateNewRecipeOutput | null>(null);
  
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
      cuisine: '',
      difficulty: 'Medium',
    },
  });

  function saveRecipeToHistory(
    recipeData: GenerateNewRecipeOutput,
    formValues: z.infer<typeof formSchema>
  ) {
    if (!user || !firestore) return;
    const historyCollectionRef = collection(firestore, 'users', user.uid, 'recipeHistory');
    const newRecipeDocRef = doc(historyCollectionRef);
    const newRecipeId = newRecipeDocRef.id;
    const recipeToSave = {
      id: newRecipeId,
      name: recipeData.recipeName,
      description: `An AI-generated ${formValues.cuisine} recipe with a difficulty of ${formValues.difficulty}. Serving size: ${recipeData.servingSize}.`,
      ingredients: recipeData.ingredientsList.map(i => ({ quantity: i.quantity, ingredient: i.ingredient })),
      instructions: recipeData.instructions,
      cuisineType: formValues.cuisine,
      dietaryPreference: 'None',
      difficultyLevel: formValues.difficulty,
      cookingTime: recipeData.cookingTime,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      imageId: `recipe-${formValues.cuisine.toLowerCase()}-${Math.floor(Math.random() * 5) + 1}`,
    };
    setDocumentNonBlocking(newRecipeDocRef, recipeToSave, {});
    toast({
      title: 'Saved to History',
      description: `${recipeData.recipeName} has been saved to your history.`,
    });
  }

  async function runGeneration(values: z.infer<typeof formSchema>) {
    const payload = {
      ingredients: values.ingredients.split(',').map((i) => i.trim()),
      cuisine: values.cuisine,
      difficulty: values.difficulty,
    };
    const result = await generateNewRecipe(payload);
    setRecipe(result);
    saveRecipeToHistory(result, values);
    return result;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecipe(null);
    try {
      await runGeneration(values);
    } catch (error) {
      console.error('Failed to generate recipe:', error);
      toast({
          variant: 'destructive',
          title: 'Generation Failed',
          description: 'Could not generate a recipe. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegenerate() {
    const values = form.getValues();
    if (!values.ingredients || !values.cuisine) return;
    setIsRegenerating(true);
    try {
      await runGeneration(values);
      toast({
        title: 'New Recipe Generated',
        description: 'A new recipe has been generated and saved to your history.',
      });
    } catch (error) {
      console.error('Failed to regenerate recipe:', error);
      toast({
        variant: 'destructive',
        title: 'Regeneration Failed',
        description: 'Could not generate a new recipe. Please try again.',
      });
    } finally {
      setIsRegenerating(false);
    }
  }

  return (
    <SidebarInset>
      <AppHeader title="Recipe Generator" showSearch={false} />
      <main className="flex-1 p-4 md:p-6">
        <GlassCard className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="ingredients"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Available Ingredients</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., chicken, tomatoes, rice" {...field} />
                      </FormControl>
                      <FormDescription>
                        Separate ingredients with a comma.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cuisine"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Cuisine Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a cuisine" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {cuisines.map((c) => (
                            <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Difficulty Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Easy">Easy</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" size="lg" disabled={isLoading} className="w-full md:w-auto font-bold">
                <Sparkles className="mr-2 h-5 w-5" />
                {isLoading ? 'Generating...' : 'Generate Recipe'}
              </Button>
            </form>
          </Form>
        </GlassCard>

        {(isLoading || isRegenerating) && <RecipeResultSkeleton />}

        {recipe && !isRegenerating && (
          <GlassCard className="p-6 md:p-8 mt-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">{recipe.recipeName}</h2>
              <Button
                variant="outline"
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="w-fit shrink-0"
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                Regenerate Recipe
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground mb-6">
                <div className="flex items-center gap-2"><ChefHat className="h-5 w-5 text-primary"/><span>{form.getValues().cuisine}</span></div>
                <div className="flex items-center gap-2"><Hourglass className="h-5 w-5 text-primary"/><span>{recipe.cookingTime}</span></div>
                <div className="flex items-center gap-2"><Users className="h-5 w-5 text-primary"/><span>{recipe.servingSize}</span></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Ingredients</h3>
                    <ul className="space-y-2">
                        {recipe.ingredientsList.map((item, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="text-primary font-bold">&bull;</span>
                                <span><strong>{item.quantity}</strong> {item.ingredient}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Instructions</h3>
                    <ol className="space-y-4">
                        {recipe.instructions.map((step, index) => (
                            <li key={index} className="flex gap-3">
                                <span className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{index + 1}</span>
                                <p className="pt-1">{step}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
          </GlassCard>
        )}
      </main>
    </SidebarInset>
  );
}
