
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import './globals.css';
import { DashboardProvider } from "@/context/DashboardContext";
import { ReactNode } from 'react';
import { AppSidebar } from '@/components/app-sidebar';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Franchise Dashboard</title>
        <meta name="description" content="A management dashboard for franchisees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <DashboardProvider>
            {children}
        </DashboardProvider>
      </body>
    </html>
  );
}
