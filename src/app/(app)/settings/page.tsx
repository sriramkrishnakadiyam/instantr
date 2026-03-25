'use client'
import { AppHeader } from '@/components/app/app-header';
import { GlassCard } from '@/components/glass-card';
import { SidebarInset } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ThemeToggle } from '@/components/theme-toggle';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const dietaryOptions = [
    { id: 'gluten-free', label: 'Gluten-Free' },
    { id: 'dairy-free', label: 'Dairy-Free' },
    { id: 'nut-allergy', label: 'Nut Allergy' },
    { id: 'vegan-preference', label: 'Vegan' },
    { id: 'vegetarian-preference', label: 'Vegetarian' },
    { id: 'pescatarian', label: 'Pescatarian' },
];

export default function SettingsPage() {
    const { toast } = useToast();

    const handleSaveChanges = () => {
        // Mock saving settings
        toast({
            title: "Settings Saved",
            description: "Your preferences have been updated successfully.",
        });
    }

    return (
        <SidebarInset>
            <AppHeader title="Settings" />
            <main className="flex-1 p-4 md:p-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <GlassCard className="p-6 md:p-8">
                        <h3 className="font-headline text-xl font-semibold mb-4">Appearance</h3>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="theme-mode" className="text-base">Theme</Label>
                            <ThemeToggle />
                        </div>
                         <p className="text-sm text-muted-foreground mt-2">
                            Choose between light, dark, or system default themes.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-6 md:p-8">
                        <h3 className="font-headline text-xl font-semibold mb-4">Cooking Preferences</h3>
                        <div className="space-y-6">
                            <div>
                                <Label className="text-base font-medium">Units of Measurement</Label>
                                <RadioGroup defaultValue="metric" className="mt-2 flex gap-4">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="metric" id="metric" />
                                        <Label htmlFor="metric" className="font-normal cursor-pointer">Metric (grams, ml)</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="imperial" id="imperial" />
                                        <Label htmlFor="imperial" className="font-normal cursor-pointer">Imperial (oz, cups)</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div>
                                <Label className="text-base font-medium">Dietary Requirements</Label>
                                <p className="text-sm text-muted-foreground mb-3">Select any dietary needs. We'll tailor recommendations for you.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {dietaryOptions.map(option => (
                                        <div key={option.id} className="flex items-center space-x-2">
                                            <Checkbox id={option.id} />
                                            <Label htmlFor={option.id} className="font-normal cursor-pointer">{option.label}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                     <div className="flex justify-end">
                        <Button size="lg" className="font-bold" onClick={handleSaveChanges}>
                            <Save className="mr-2 h-4 w-4" /> Save Changes
                        </Button>
                    </div>
                </div>
            </main>
        </SidebarInset>
    );
}
