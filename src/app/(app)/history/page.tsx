'use client';
import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Trash2, BookOpen, ChefHat } from 'lucide-react';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc, writeBatch, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import type { Recipe } from '@/lib/definitions';
import { format } from 'date-fns';

const HistoryItemSkeleton = () => (
  <GlassCard className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div className="flex-grow space-y-2">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="flex w-full sm:w-auto items-center gap-2 self-end sm:self-center">
      <Skeleton className="h-10 w-24" />
      <Skeleton className="h-10 w-10" />
    </div>
  </GlassCard>
);

export default function HistoryPage() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const historyCollectionRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return collection(firestore, 'users', user.uid, 'recipeHistory');
  }, [user, firestore]);

  const historyQuery = useMemoFirebase(() => {
    if (!historyCollectionRef) return null;
    return query(historyCollectionRef, orderBy('createdAt', 'desc'));
  }, [historyCollectionRef]);

  const { data: historyItems, isLoading } = useCollection<Recipe & { createdAt: any }>(historyQuery);

  const handleDeleteRecipe = (recipeId: string) => {
    if (!user || !firestore) return;
    const docRef = doc(firestore, 'users', user.uid, 'recipeHistory', recipeId);
    deleteDocumentNonBlocking(docRef);
    toast({ title: 'Recipe Deleted', description: 'The recipe has been removed from your history.' });
  };

  const handleClearAllHistory = async () => {
    if (!historyCollectionRef || !firestore) return;
    try {
      const querySnapshot = await getDocs(historyCollectionRef);
      const batch = writeBatch(firestore);
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      toast({ title: 'History Cleared', description: 'All recipes have been removed from your history.' });
    } catch (error) {
      console.error("Error clearing history: ", error);
      toast({ variant: 'destructive', title: 'Error', description: 'Could not clear history.' });
    }
  };

  return (
    <SidebarInset>
      <AppHeader title="Recipe History" />
      <main className="flex-1 p-4 md:p-6">
        <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
          <p className="text-muted-foreground">Here are the recipes you've recently generated and saved.</p>
          {historyItems && historyItems.length > 0 && (
             <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="font-bold">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Clear All History
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete all your saved recipes.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleClearAllHistory}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        <div className="space-y-4">
          {isLoading && Array.from({ length: 3 }).map((_, i) => <HistoryItemSkeleton key={i} />)}
          
          {!isLoading && historyItems?.map((item) => (
            <GlassCard key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex-grow">
                <h3 className="font-headline font-semibold text-lg">{item.name}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                  <span>Saved on {item.createdAt ? format(item.createdAt.toDate(), 'yyyy-MM-dd') : 'N/A'}</span>
                  <div className="flex items-center gap-2">
                    <ChefHat className="h-4 w-4" />
                    <span>{item.cuisineType}</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:w-auto items-center gap-2 self-end sm:self-center">
                <Button variant="outline" asChild className="flex-1 sm:flex-none">
                  <Link href={`/history/${item.id}`}>
                    <BookOpen className="mr-2 h-4 w-4" /> View
                  </Link>
                </Button>
                 <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive hover:bg-destructive/10">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Delete Recipe?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete "{item.name}"? This action cannot be undone.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDeleteRecipe(item.id)}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </div>
            </GlassCard>
          ))}
          
          {!isLoading && (!historyItems || historyItems.length === 0) && (
            <GlassCard className="p-12 text-center">
              <h3 className="font-headline text-xl">No History Yet</h3>
              <p className="text-muted-foreground mt-2">Start generating recipes to see your history here.</p>
              <Button asChild className="mt-4">
                  <Link href="/recipe-generator">Generate a Recipe</Link>
              </Button>
            </GlassCard>
          )}
        </div>
      </main>
    </SidebarInset>
  );
}

    