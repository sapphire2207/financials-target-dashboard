"use client";

import { Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";


export default function Header() {
  const { dashboardData } = useDashboard();
  const profile = dashboardData.profile.avatar;


  return (
    <header className="max-w-full bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between">
      <div className="flex items-end ml-auto space-x-2">
        
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings size={13} className="text-gray-500" />
        </button>
        
        <Avatar className="h-7 w-7">
          <AvatarImage src={profile} alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
