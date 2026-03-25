import { SignUpForm } from '@/components/auth/signup-form';
import { GlassCard } from '@/components/glass-card';
import { Utensils } from 'lucide-react';

export default function SignUpPage() {
  return (
    <GlassCard className="w-full max-w-md p-8">
      <div className="flex flex-col items-center text-center">
        <Utensils className="h-10 w-10 text-primary mb-4" />
        <h1 className="font-headline text-3xl font-bold">Create an Account</h1>
        <p className="text-muted-foreground">Join InstantAI and start cooking</p>
      </div>
      <SignUpForm />
    </GlassCard>
  );
}
