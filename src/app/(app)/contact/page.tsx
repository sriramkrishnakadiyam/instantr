'use client';
import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
    const supportEmail = "sriramkrishnakadiyam@gmail.com";
    const { toast } = useToast();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // In a real app, you'd handle form submission (e.g., API call)
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you soon.",
        });
        (event.target as HTMLFormElement).reset();
    };

    return (
        <SidebarInset>
            <AppHeader title="Contact Support" />
            <main className="flex-1 p-4 md:p-6 flex items-center justify-center">
                <GlassCard className="w-full max-w-2xl p-6 md:p-8">
                    <div className="text-center mb-8">
                        <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
                        <p className="text-muted-foreground">Have a question or feedback? We'd love to hear from you.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..." rows={5} required />
                        </div>
                        <Button type="submit" className="w-full font-bold" size="lg">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <p>You can also email us directly at:</p>
                        <a href={`mailto:${supportEmail}`} className="font-medium text-primary hover:underline flex items-center justify-center gap-2 mt-1">
                            <Mail className="h-4 w-4"/> {supportEmail}
                        </a>
                    </div>
                </GlassCard>
            </main>
        </SidebarInset>
    );
}
