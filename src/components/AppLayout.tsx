import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TopicsSidebar } from "@/components/TopicsSidebar";
import { Header } from "@/components/Header";

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Footer = () => (
  <footer className="py-4 px-6 text-center text-sm text-muted-foreground border-t border-border">
    Built and made by{" "}
    <a 
      href="https://qubesight.lat" 
      target="_blank" 
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      QubeSight
    </a>
  </footer>
);

export function AppLayout({ children, showSidebar = true }: AppLayoutProps) {
  if (!showSidebar) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <TopicsSidebar />
        <div className="flex-1 flex flex-col">
          <Header>
            <SidebarTrigger className="mr-2" />
          </Header>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
