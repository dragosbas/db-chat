import { Menu } from "lucide-react";
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

const MainSidebar = ({ isOpen, setIsOpen }: MainSidebarProps) => {
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
      <div className="p-4 border-b border-gray-800">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Platforms</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platforms.map((platform) => (
                <SidebarMenuItem key={platform.name}>
                  <SidebarMenuButton
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                      "hover:bg-gray-800",
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
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  );
};

export default MainSidebar;