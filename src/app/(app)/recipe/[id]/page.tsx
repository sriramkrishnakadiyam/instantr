import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { allRecipes } from '@/lib/recipes';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { ChefHat, ListOrdered, Salad } from 'lucide-react';

export async function generateStaticParams() {
  return allRecipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const recipe = allRecipes.find((r) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === recipe.imageId);

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
                    {recipe.cuisine}
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
