import { Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

type AppHeaderProps = {
  title: string;
  showSearch?: boolean;
};

export function AppHeader({ title, showSearch = true }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-4">
        <div className="md:hidden">
            <SidebarTrigger />
        </div>
        <h1 className="font-headline text-2xl font-semibold">{title}</h1>
      </div>
      {showSearch && (
        <div className="flex w-full flex-1 items-center justify-end gap-4">
            <div className="relative hidden w-full max-w-sm md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search recipes..."
                className="pl-9 bg-background/50"
            />
            </div>
        </div>
      )}
    </header>
  );
}
