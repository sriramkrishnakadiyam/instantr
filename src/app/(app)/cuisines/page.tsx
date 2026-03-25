import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { cuisines } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function CuisinesPage() {
  return (
    <SidebarInset>
      <AppHeader title="All Cuisines" />
      <main className="flex-1 p-4 md:p-6">
        <div className="mb-8">
            <h2 className="font-headline text-3xl font-bold">Explore the World of Flavors</h2>
            <p className="text-muted-foreground">From spicy Indian curries to delicate French pastries, your next culinary adventure starts here.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cuisines.map((cuisine) => {
            const image = PlaceHolderImages.find((img) => img.id === cuisine.imageId);
            return (
              <Link key={cuisine.name} href={`/cuisines/${cuisine.name.toLowerCase().replace(/ /g, '-')}`}>
                <GlassCard className="group overflow-hidden relative aspect-square transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={cuisine.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-headline text-xl font-bold text-white shadow-lg">
                      {cuisine.name}
                    </h3>
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </main>
    </SidebarInset>
  );
}
