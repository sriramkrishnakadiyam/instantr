import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cuisines } from '@/lib/data';
import { allRecipes } from '@/lib/recipes';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return cuisines.map((cuisine) => ({
    name: cuisine.name.toLowerCase().replace(/ /g, '-'),
  }));
}

export default function CuisineDetailPage({ params }: { params: { name: string } }) {
  const cuisineName = decodeURIComponent(params.name).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const cuisineRecipes = allRecipes.filter(recipe => recipe.cuisine === cuisineName);

  if (cuisineRecipes.length === 0) {
    notFound();
  }

  return (
    <SidebarInset>
      <AppHeader title={`${cuisineName} Recipes`} />
      <main className="flex-1 p-4 md:p-6">
        <p className="text-muted-foreground mb-8 text-lg">Discover a hand-picked selection of 10 delicious recipes from {cuisineName} cuisine.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cuisineRecipes.map((recipe) => {
            const image = PlaceHolderImages.find((img) => img.id === recipe.imageId);
            return (
              <GlassCard key={recipe.id} className="overflow-hidden group flex flex-col">
                {image ? (
                  <div className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={recipe.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1400px) 33vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">No Image</p>
                  </div>
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="font-headline font-semibold text-lg">{recipe.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1 flex-grow">{recipe.description}</p>
                  <Button asChild variant="link" className="p-0 mt-2 self-start">
                    <Link href={`/recipe/${recipe.id}`}>View Recipe <ArrowRight className="h-4 w-4 ml-1" /></Link>
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </main>
    </SidebarInset>
  );
}
