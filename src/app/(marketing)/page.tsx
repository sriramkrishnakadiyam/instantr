'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { GlassCard } from '@/components/glass-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sparkles, UtensilsCrossed, Globe, Loader2 } from 'lucide-react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Powered',
    description: 'Leverage cutting-edge AI to create unique recipes from the ingredients you have on hand.',
  },
  {
    icon: UtensilsCrossed,
    title: '10,000+ Recipes',
    description: 'Explore a vast library of recipes across all major cuisines, with new additions daily.',
  },
  {
    icon: Globe,
    title: 'All Cuisines',
    description: 'From Italian pasta to Indian curries, travel the world through your kitchen.',
  },
];

export default function LandingPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!isUserLoading && user) {
        router.replace('/dashboard');
      }
    }, [user, isUserLoading, router]);

    if (isUserLoading || (!isUserLoading && user)) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
              <Loader2 className="h-16 w-16 animate-spin text-primary" />
            </div>
        );
    }
    
  return (
    <>
      <MarketingHeader />
      <main className="flex-1">
        <section id="hero" className="relative text-center py-20 md:py-32">
          <div className="container relative z-10 mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Instant Recipe Generator
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
              Generate Delicious Recipes in Seconds
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href="/signin">Sign In</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="font-bold bg-transparent hover:bg-white/10 text-foreground">
                <Link href="/dashboard">Explore Recipes</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-24 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-center text-3xl font-bold md:text-4xl">Why Choose GourmetAI?</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <GlassCard key={index} className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-foreground/70">{feature.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-center text-3xl font-bold md:text-4xl">What Our Users Say</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <GlassCard key={testimonial.name} className="flex flex-col p-6">
                  <p className="flex-grow text-foreground/80 italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.title}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

      </main>
      <MarketingFooter />
    </>
  );
}
