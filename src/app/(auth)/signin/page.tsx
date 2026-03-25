import { SignInForm } from '@/components/auth/signin-form';
import { GlassCard } from '@/components/glass-card';
import { Utensils } from 'lucide-react';

export default function SignInPage() {
  return (
    <GlassCard className="w-full max-w-md p-8">
      <div className="flex flex-col items-center text-center">
        <Utensils className="h-10 w-10 text-primary mb-4" />
        <h1 className="font-headline text-3xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground">Sign in to continue your culinary journey</p>
      </div>
      <SignInForm />
    </GlassCard>
  );
}
