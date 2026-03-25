'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ShieldCheck, RefreshCw, Pencil } from 'lucide-react';
import { useAuth } from '@/firebase';
import { initiateEmailSignUp } from '@/firebase/non-blocking-login';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  otp: z.string().min(6, { message: 'OTP must be 6 digits.' }).max(6, { message: 'OTP must be 6 digits.' }),
});

const MOCK_OTP = '123456';

export default function VerifyOtpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [signupDetails, setSignupDetails] = useState<{name: string, email: string, password: string} | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const details = sessionStorage.getItem('signupDetails');
        if (details) {
            setSignupDetails(JSON.parse(details));
        } else {
            // If no details are found, maybe the user landed here by mistake
            router.replace('/signup');
        }
    }
  }, [router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    if (values.otp !== MOCK_OTP) {
        toast({
            variant: 'destructive',
            title: 'Invalid OTP',
            description: 'The OTP you entered is incorrect. Please try again.',
        });
        setIsLoading(false);
        return;
    }

    if (!signupDetails) {
        toast({
            variant: 'destructive',
            title: 'Session Expired',
            description: 'Your sign-up details were not found. Please try signing up again.',
        });
        router.replace('/signup');
        setIsLoading(false);
        return;
    }

    try {
        await initiateEmailSignUp(auth, signupDetails.name, signupDetails.email, signupDetails.password);
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('signupDetails');
        }
        toast({
            title: 'Account Created!',
            description: 'You can now sign in with your credentials.',
        });
        router.push('/signin');
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Sign Up Failed',
            description: error.message || 'Could not create account. The email might already be in use.',
        });
    } finally {
        setIsLoading(false);
    }
  }

  const handleResend = () => {
    toast({
      title: 'New OTP Sent',
      description: `Your new OTP is ${MOCK_OTP}. (This is a mock action)`,
    });
  };

  const handleChangeEmail = () => {
    router.push('/signup');
  };

  return (
    <GlassCard className="w-full max-w-md p-8">
      <div className="flex flex-col items-center text-center">
        <ShieldCheck className="h-10 w-10 text-primary mb-4" />
        <h1 className="font-headline text-3xl font-bold">Verify Your Account</h1>
        <p className="text-muted-foreground mt-2">
          We’ve sent a One-Time Password (OTP) to {signupDetails?.email ? <strong>{signupDetails.email}</strong> : 'your email'}.
        </p>
         <p className="text-muted-foreground mt-1">
          Please enter the 6-digit code below to verify your account.
        </p>
      </div>

      <Alert className="mt-4 border-primary/50">
          <AlertTitle className="text-primary">Prototype Notice</AlertTitle>
          <AlertDescription>
              This is a demo. No email has been sent. Please use the mock OTP below to continue.
              <p className="font-bold text-lg text-center mt-2 tracking-widest">{MOCK_OTP}</p>
          </AlertDescription>
      </Alert>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter 6-digit code</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="_ _ _ _ _ _" 
                    {...field} 
                    disabled={isLoading} 
                    className="text-center text-2xl tracking-[0.5em]"
                    maxLength={6}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full font-bold" size="lg" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Verifying...' : 'Verify & Create Account'}
          </Button>
        </form>
      </Form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Didn’t receive the code?</p>
        <div className="flex justify-center gap-4 mt-2">
            <Button variant="link" onClick={handleResend} className="p-0 h-auto">
                <RefreshCw className="mr-2 h-4 w-4" /> Resend OTP
            </Button>
            <Button variant="link" onClick={handleChangeEmail} className="p-0 h-auto">
                <Pencil className="mr-2 h-4 w-4" /> Change Email
            </Button>
        </div>
        <p className="mt-4 text-xs">The code will expire in 5 minutes.</p>
      </div>
    </GlassCard>
  );
}
