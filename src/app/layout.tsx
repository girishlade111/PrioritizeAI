import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  ScatterChart,
  Lightbulb,
  Github,
  Settings,
} from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from '@/components/logo';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Nav } from '@/components/nav';

export const metadata: Metadata = {
  title: 'PrioritizeAI',
  description: 'Intelligent Feature Prioritization Framework',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="prioritize-ai-theme">
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <Logo />
              </SidebarHeader>
              <SidebarContent>
                <Nav />
              </SidebarContent>
              <SidebarFooter>
                 <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="/settings" passHref>
                      <SidebarMenuButton tooltip="Settings">
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  </SidebarMenu>
                 <div className="flex items-center gap-3 p-2">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://placehold.co/40x40.png" alt="Product Manager" data-ai-hint="person portrait" />
                        <AvatarFallback>PM</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-sm group-data-[collapsible=icon]:hidden">
                        <span className="font-semibold text-primary">Product Manager</span>
                        <span className="text-muted-foreground">SaaS Inc.</span>
                    </div>
                </div>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset>
                <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 md:justify-end">
                    <SidebarTrigger className="md:hidden" />
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com" target="_blank" aria-label="GitHub Repository">
                            <Github />
                        </a>
                    </Button>
                </header>
                <main className="flex-1 p-4 sm:p-6">{children}</main>
            </SidebarInset>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
