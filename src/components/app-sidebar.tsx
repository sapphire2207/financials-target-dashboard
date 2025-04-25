import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    { title: "Home", url: "#", isActive: true },
    { title: "Stages & Checklist", url: "#" },
    { title: "Upload Docs", url: "#" },
    { title: "Preferred Vendors", url: "#" },
    { title: "Tech Stack", url: "#" },
    { title: "Targets", url: "#" },
    { title: "Zee Sales Targets", url: "#" },
    { title: "MAI Settings", url: "#" },
    { title: "Pending Questions", url: "#", badge: "3" },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <div>
      <Sidebar {...props} className="w-[255px]">
        <div className="bg-[#11455dfc] h-full flex flex-col text-[#ffffff96] pl-4 pr-4 pt-7">
          <SidebarHeader />
          <SidebarContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} className={`${item.isActive ? 'bg-[#ffffff1a]' : ''} rounded-md`}>
                    <a
                      href={item.url}
                      className="flex"
                    >
                      <span className={`${item.isActive ? 'text-[#2fbcfefa]' : 'text-[#ffffff96]'}`}>{item.title}</span>
                      {item.badge && (
                        <span className="ml-2 text-sm bg-[#f9fafb] border-[#eaf6f0] border-[1px] text-[#344054] px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <div className="pb-9 pl-[1px] mt-auto">
            <a
              href="#"
              className="text-sm text-[#ffffff96] hover:text-white transition"
            >
              Logout
            </a>
          </div>
        </div>
        <SidebarRail />
      </Sidebar>
    </div>    
  );
}