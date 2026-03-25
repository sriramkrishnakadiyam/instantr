import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingRecipePage() {
  return (
    <SidebarInset>
      <AppHeader title="Loading Recipe..." />
      <main className="flex-1 p-4 md:p-6">
        <GlassCard className="overflow-hidden">
          <Skeleton className="h-64 md:h-96 w-full" />
          <div className="p-6 md:p-8">
            <Skeleton className="h-8 w-1/4 mb-4" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6 mb-8" />
            
            <Skeleton className="h-8 w-1/3 mb-4 mt-8" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-full" />
            </div>

             <Skeleton className="h-8 w-1/3 mb-4 mt-8" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </GlassCard>
      </main>
    </SidebarInset>
  );
}
