'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Utensils, LayoutDashboard, Sparkles, BookHeart, History, Mail, Settings, LogOut } from 'lucide-react';
import type { NavItem } from '@/lib/definitions';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';


const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/recipe-generator', label: 'Generator', icon: Sparkles },
  { href: '/cuisines', label: 'Cuisines', icon: BookHeart },
  { href: '/recommendations', label: 'For You', icon: Sparkles },
  { href: '/history', label: 'History', icon: History },
];

const bottomNavItems: NavItem[] = [
    { href: '/contact', label: 'Support', icon: Mail },
    { href: '/settings', label: 'Settings', icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const auth = useAuth();
  const { user } = useUser();
  const { toast } = useToast();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast({ title: 'Signed Out', description: 'You have been successfully signed out.' });
      router.push('/signin');
    }).catch((error) => {
      toast({ variant: 'destructive', title: 'Sign Out Failed', description: error.message });
    });
  };

  return (
      <Sidebar side="left" collapsible="icon" variant="sidebar">
        <SidebarHeader className="items-center justify-center text-center">
            <Utensils className="h-8 w-8 text-primary group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6 transition-all" />
            <span className="font-headline text-2xl font-bold group-data-[collapsible=icon]:hidden">InstantAI</span>
        </SidebarHeader>

        <SidebarContent className="p-2">
            <SidebarMenu>
                {navItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                            asChild
                            isActive={pathname.startsWith(item.href)}
                            tooltip={item.label}
                            className="justify-start"
                        >
                            <Link href={item.href}>
                                <item.icon className="h-5 w-5" />
                                <span>{item.label}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-2">
             <div className="group-data-[collapsible=icon]:hidden flex flex-col gap-2">
                 {bottomNavItems.map((item) => (
                    <SidebarMenuButton
                        key={item.href}
                        asChild
                        isActive={pathname.startsWith(item.href)}
                        className="justify-start"
                        variant="ghost"
                    >
                        <Link href={item.href}>
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                ))}
             </div>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto w-full justify-start p-2 group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:justify-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.photoURL ?? undefined} />
                    <AvatarFallback>{user?.displayName?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                  </Avatar>
                  <div className="ml-2 text-left group-data-[collapsible=icon]:hidden">
                    <p className="text-sm font-medium truncate">{user?.displayName || 'User'}</p>
                    <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="start" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="md:hidden">
                    {bottomNavItems.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                           <Link href={item.href}>
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.label}</span>
                           </Link>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                </div>
                 <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center justify-center group-data-[collapsible=icon]:w-auto">
              <ThemeToggle />
            </div>
        </SidebarFooter>
      </Sidebar>
  );
}
