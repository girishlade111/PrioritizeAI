'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ScatterChart, Lightbulb } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const navItems = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard, tooltip: 'Dashboard' },
    { href: '/matrix', label: 'Matrix', icon: ScatterChart, tooltip: 'Prioritization Matrix' },
    { href: '/suggestions', label: 'AI Suggestions', icon: Lightbulb, tooltip: 'AI Suggestions' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} passHref>
            <SidebarMenuButton
              isActive={pathname === item.href}
              tooltip={item.tooltip}
            >
              <item.icon />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
