import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TopicsSidebar } from "@/components/TopicsSidebar";
import { Header } from "@/components/Header";

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Footer = () => (
  <footer className="py-4 px-6 text-center text-xs text-[#0b3b4a]/75 border-t border-white/60 bg-white/40 backdrop-blur-md">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 max-w-6xl mx-auto">
      <div className="flex items-center gap-2">
        <span className="font-display font-extrabold text-sm text-[#0b3b4a]">Luma</span>
        <span className="text-primary font-bold">•</span>
        <span className="text-primary font-semibold">Learn brighter.</span>
      </div>
      <div>
        Made by{" "}
        <a 
          href="https://qubesight.lat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-display font-semibold text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
        >
          QubeSight
        </a>
      </div>
    </div>
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
