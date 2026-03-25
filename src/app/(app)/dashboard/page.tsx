import Link from 'next/link';
import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';
import { SidebarInset } from '@/components/ui/sidebar';
import { ArrowRight, BookHeart, History, Sparkles, Mail } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allRecipes } from '@/lib/recipes';

const quickActions = [
  {
    href: '/recipe-generator',
    label: 'Generate Recipe',
    icon: Sparkles,
  },
  {
    href: '/cuisines',
    label: 'All Cuisines',
    icon: BookHeart,
  },
  {
    href: '/history',
    label: 'Recipe History',
    icon: History,
  },
  {
    href: '/recommendations',
    label: 'Recommendations',
    icon: Sparkles,
  },
  {
    href: '/contact',
    label: 'Contact Support',
    icon: Mail,
  },
];

const featuredRecipeIds = ['italian-4', 'indian-6', 'french-2'];
const featuredRecipes = allRecipes.filter(r => featuredRecipeIds.includes(r.id));

export default function DashboardPage() {
  return (
    <SidebarInset>
      <AppHeader title="Dashboard" />
      <main className="flex-1 p-4 md:p-6">
        <div className="mb-8">
          <h2 className="font-headline text-2xl font-bold">Welcome back, Chef!</h2>
          <p className="text-muted-foreground">What masterpiece will you create today?</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
          {quickActions.map((action) => (
            <GlassCard key={action.href} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <action.icon className="h-8 w-8 text-primary" />
                <span className="font-semibold">{action.label}</span>
              </div>
              <Button asChild variant="ghost" size="icon">
                <Link href={action.href}>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </GlassCard>
          ))}
        </div>
        
        <div>
          <h3 className="font-headline text-xl font-bold mb-4">Featured Recipes</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((recipe) => {
              const image = PlaceHolderImages.find((img) => img.id === recipe.imageId);
              return (
                <GlassCard key={recipe.id} className="overflow-hidden group">
                    {image && (
                         <div className="relative h-48">
                            <Image 
                                src={image.imageUrl} 
                                alt={recipe.name} 
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={image.imageHint}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                         </div>
                    )}
                   <div className="p-4">
                        <h4 className="font-headline font-semibold text-lg">{recipe.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{recipe.description}</p>
                        <Button asChild variant="link" className="p-0 mt-2">
                           <Link href={`/recipe/${recipe.id}`}>View Recipe <ArrowRight className="h-4 w-4 ml-1" /></Link>
                        </Button>
                   </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

      </main>
    </SidebarInset>
  );
}
