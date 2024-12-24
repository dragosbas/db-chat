import { User, Settings, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface MainSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MainSidebar = ({ isOpen }: MainSidebarProps) => {
  const platforms = [
    { name: "WhatsApp", status: "connected" },
    { name: "Facebook", status: "connected" },
    { name: "Instagram", status: "pending" },
  ];

  return (
    <div
      className={cn(
        "w-64 bg-[#1A1F2C] text-white transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-64"
      )}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Platforms</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platforms.map((platform) => (
                <SidebarMenuItem key={platform.name}>
                  <SidebarMenuButton
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors hover:bg-gray-800",
                      platform.status === "connected" && "text-green-400"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full",
                          platform.status === "connected" ? "bg-green-400" : "bg-gray-400"
                        )}
                      />
                      <span>{platform.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
                  <Settings className="w-4 h-4" />
                  <span>Account Status</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 text-red-400">
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  );
};

export default MainSidebar;