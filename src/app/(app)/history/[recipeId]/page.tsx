'use client';
import { useParams, notFound } from 'next/navigation';
import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { useDoc, useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ChefHat, ListOrdered, Salad, Hourglass, Users, Star } from 'lucide-react';
import LoadingRecipePage from './loading';
import type { Recipe } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HistoryRecipeDetailPage() {
    const params = useParams();
    const recipeId = params.recipeId as string;

    const { user } = useUser();
    const firestore = useFirestore();

    const recipeDocRef = useMemoFirebase(() => {
        if (!user || !firestore || !recipeId) return null;
        return doc(firestore, 'users', user.uid, 'recipeHistory', recipeId);
    }, [user, firestore, recipeId]);

    const { data: recipe, isLoading } = useDoc<Recipe>(recipeDocRef);

    if (isLoading) {
        return <LoadingRecipePage />;
    }

    if (!recipe) {
        return notFound();
    }
    
    // Find a placeholder image if the recipe doesn't have one
    const image = PlaceHolderImages.find((img) => img.id === recipe.imageId) || PlaceHolderImages.find(img => img.id.includes(recipe.cuisineType.toLowerCase()));

    return (
        <SidebarInset>
            <AppHeader title={recipe.name} />
            <main className="flex-1 p-4 md:p-6">
                <GlassCard className="overflow-hidden">
                    {image && (
                        <div className="relative h-64 md:h-96 w-full">
                        <Image
                            src={image.imageUrl}
                            alt={recipe.name}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                            sizes="100vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    )}
                    <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <Badge variant="secondary" className="text-base">
                                <ChefHat className="h-4 w-4 mr-2" />
                                {recipe.cuisineType}
                            </Badge>
                             <Badge variant="secondary" className="text-base">
                                <Star className="h-4 w-4 mr-2" />
                                {recipe.difficultyLevel}
                            </Badge>
                            <Badge variant="secondary" className="text-base">
                                <Hourglass className="h-4 w-4 mr-2" />
                                {recipe.cookingTime}
                            </Badge>
                        </div>
                        <h1 className="font-headline text-3xl md:text-5xl font-bold mb-4">{recipe.name}</h1>
                        <p className="text-lg text-muted-foreground mb-8">{recipe.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mb-4 border-b pb-2 flex items-center gap-2"><Salad className="h-6 w-6 text-primary"/>Ingredients</h3>
                            <ul className="space-y-2">
                            {recipe.ingredients.map((item, index) => (
                                <li key={index} className="flex gap-2">
                                <span className="text-primary font-bold">&bull;</span>
                                <span>
                                    {item.quantity && <strong>{item.quantity}</strong>} {item.ingredient}
                                </span>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mb-4 border-b pb-2 flex items-center gap-2"><ListOrdered className="h-6 w-6 text-primary"/>Instructions</h3>
                            <ol className="space-y-4">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="flex gap-3">
                                <span className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                </span>
                                <p className="pt-1">{step}</p>
                                </li>
                            ))}
                            </ol>
                        </div>
                        </div>
                    </div>
                </GlassCard>
            </main>
        </SidebarInset>
    );
}

    