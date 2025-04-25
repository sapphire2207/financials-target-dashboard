"use client";
import AccountProgress from "@/components/dashboard/AccountProgress";
import FranchiseesOnboard from "@/components/dashboard/FranchiseesOnboard";
import KeyInsights from "@/components/dashboard/KeyInsights";
import FinancialWellbeing from "@/components/dashboard/FinancialWellbeing";
import ProspectLeads from "@/components/dashboard/ProspectLeads";
import PendingQuestions from "@/components/dashboard/PendingQuestions";
import AIChat from "@/components/dashboard/AIChat";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>

        {/* Mobile sidebar trigger */}
        <div className="lg:hidden fixed top-3 left-3 z-50">
          <SidebarTrigger />
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 space-y-4 overflow-y-auto bg-white border-b border-[#eaecf0] last:border-b-0">
            {/* Top Section: 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                <AccountProgress />
              </div>

              {/* Middle Column */}
              <div className="space-y-4">
                <FranchiseesOnboard />
                <FinancialWellbeing />
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <KeyInsights />
                <ProspectLeads />
              </div>
            </div>
          </main>

          {/* Bottom Section: Pending Questions & AI Chat */}
          <div className="flex flex-col lg:flex-row gap-0 bg-gray-50 h-[291px]">
            <div className="lg:w-1/3">
              <PendingQuestions />
            </div>
            <div className="lg:w-2/3">
              <AIChat />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
