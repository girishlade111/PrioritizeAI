'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  User,
  Settings,
} from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { FeatureProvider } from '@/context/FeatureContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from '@/components/logo';

// Note: Can't export metadata from a client component.
// This can be moved to a separate file or defined in a server component parent if needed.
// export const metadata: Metadata = {
//   title: 'PrioritizeAI',
//   description: 'Intelligent Feature Prioritization Framework',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
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
        <FeatureProvider>
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <Logo />
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="/" passHref>
                      <SidebarMenuButton
                        isActive={pathname === '/'}
                        tooltip="Dashboard"
                      >
                        <LayoutDashboard />
                        <span>Dashboard</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/matrix" passHref>
                      <SidebarMenuButton
                        isActive={pathname === '/matrix'}
                        tooltip="Prioritization Matrix"
                      >
                        <ScatterChart />
                        <span>Matrix</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/suggestions" passHref>
                      <SidebarMenuButton
                        isActive={pathname === '/suggestions'}
                        tooltip="AI Suggestions"
                      >
                        <Lightbulb />
                        <span>AI Suggestions</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter>
                 <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="/settings" passHref>
                      <SidebarMenuButton
                        isActive={pathname === '/settings'}
                        tooltip="Settings"
                      >
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
        </FeatureProvider>
      </body>
    </html>
  );
}
