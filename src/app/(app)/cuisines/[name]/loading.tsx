import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingCuisinePage() {
  return (
    <SidebarInset>
      <AppHeader title="Loading Recipes..." />
      <main className="flex-1 p-4 md:p-6">
        <Skeleton className="h-6 w-3/4 mb-8" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <GlassCard key={index} className="overflow-hidden group flex flex-col">
              <Skeleton className="h-48 w-full" />
              <div className="p-4 flex flex-col flex-grow">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <Skeleton className="h-8 w-32" />
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </SidebarInset>
  );
}

    