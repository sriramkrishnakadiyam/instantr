import { AppSidebar } from "@/components/app/app-sidebar";
import { AuthGate } from "@/components/auth/auth-gate";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AuthGate>
        <div className="flex min-h-screen">
          <AppSidebar />
          {children}
        </div>
      </AuthGate>
    </SidebarProvider>
  );
}
