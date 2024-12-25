import { User, Settings, LogOut, MessageSquare, Check, LogIn, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { platformService } from "@/services/platformService";
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
  const { data: platforms = [] } = useQuery({
    queryKey: ['platforms'],
    queryFn: platformService.getPlatforms,
  });

  return (
    <div className={cn(
      "w-64 bg-[#221F26] text-white border-r border-gray-800 transition-all duration-300 ease-in-out h-screen",
      isOpen ? "translate-x-0" : "-translate-x-56"
    )}>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-gray-400 px-2 flex justify-between items-center">
            Main Menu
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className={cn(
                "w-4 h-4 transition-transform duration-300",
                !isOpen && "rotate-180"
              )} />
            </button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link 
                  to="/profile"
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors border-b border-gray-800"
                >
                  <User className="w-4 h-4" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "opacity-0")}>Profile</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors border-b border-gray-800">
                  <MessageSquare className="w-4 h-4" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "opacity-0")}>Chats</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="text-sm font-medium text-gray-400 px-2">
              Platforms
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {platforms.map((platform) => (
                  <SidebarMenuItem key={platform.name}>
                    <Link 
                      to={`/platform/${platform.id}`}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors hover:bg-gray-800/50 border-b border-gray-800",
                        platform.status === "connected" ? "text-green-400" : "text-gray-400"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full",
                            platform.status === "connected"
                              ? "bg-green-400"
                              : "bg-gray-400"
                          )}
                        />
                        <span className={cn("transition-opacity duration-200", !isOpen && "opacity-0")}>{platform.name}</span>
                      </div>
                      <div className={cn("flex items-center gap-1 transition-opacity duration-200", !isOpen && "opacity-0")}>
                        {platform.status === "connected" ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span className="text-sm">Connected</span>
                          </>
                        ) : (
                          <>
                            <LogIn className="w-4 h-4" />
                            <span className="text-sm">Log in</span>
                          </>
                        )}
                      </div>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="text-sm font-medium text-gray-400 px-2">
              Account
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors border-b border-gray-800">
                    <Settings className="w-4 h-4" />
                    <span className={cn("transition-opacity duration-200", !isOpen && "opacity-0")}>Account Status</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-red-400 border-b border-gray-800">
                    <LogOut className="w-4 h-4" />
                    <span className={cn("transition-opacity duration-200", !isOpen && "opacity-0")}>Log Out</span>
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
