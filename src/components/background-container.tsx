'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const backgroundImages = [
  { id: 'biryani-bg', position: 'top-0 left-0 w-1/2 h-1/2' },
  { id: 'chicken-bg', position: 'top-0 right-0 w-1/2 h-1/2' },
  { id: 'tomatoes-bg', position: 'bottom-0 left-0 w-1/2 h-1/2' },
  { id: 'carrots-bg', position: 'bottom-0 right-0 w-1/2 h-1/2' },
  { id: 'eggs-bg', position: 'top-1/4 left-1/4 w-1/2 h-1/2' },
];

export function BackgroundContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
        {backgroundImages.map((bg, index) => {
          const image = PlaceHolderImages.find((img) => img.id === bg.id);
          if (!image) return null;

          return (
            <div
              key={image.id}
              className={cn('absolute opacity-30', bg.position)}
              style={{ animation: `pulse-fade ${10 + index * 2}s infinite alternate` }}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                sizes="50vw"
                priority
              />
            </div>
          );
        })}
      </div>
       <style jsx global>{`
        @keyframes pulse-fade {
          0% {
            opacity: 0.1;
            transform: scale(1);
          }
          100% {
            opacity: 0.25;
            transform: scale(1.05);
          }
        }
      `}</style>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
