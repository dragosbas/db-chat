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
      "relative w-64 bg-[#221F26] text-white border-r border-gray-800 transition-all duration-300 ease-in-out h-screen",
      isOpen ? "translate-x-0 w-64" : "w-16"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute -right-3 top-6 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-[#221F26] border border-gray-800 text-gray-200 hover:text-white hover:bg-gray-800 transition-all duration-300",
          !isOpen && "rotate-180"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className={cn(
            "text-sm font-medium text-gray-400 px-2",
            !isOpen && "sr-only"
          )}>
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link 
                  to="/profile"
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  title={!isOpen ? "Profile" : undefined}
                >
                  <User className="w-4 h-4 shrink-0" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "hidden")}>Profile</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  title={!isOpen ? "Chats" : undefined}
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "hidden")}>Chats</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className={cn("my-4 border-t border-gray-800", !isOpen && "mx-2")} />

        <SidebarGroup>
          <SidebarGroupLabel className={cn(
            "text-sm font-medium text-gray-400 px-2",
            !isOpen && "sr-only"
          )}>
            Platforms
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platforms.map((platform) => (
                <SidebarMenuItem key={platform.name}>
                  <Link 
                    to={`/platform/${platform.id}`}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-gray-800/50",
                      platform.status === "connected" ? "text-green-400" : "text-gray-400"
                    )}
                    title={!isOpen ? platform.name : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full shrink-0",
                          platform.status === "connected"
                            ? "bg-green-400"
                            : "bg-gray-400"
                        )}
                      />
                      <span className={cn("transition-opacity duration-200", !isOpen && "hidden")}>{platform.name}</span>
                    </div>
                    <div className={cn("ml-auto flex items-center gap-1", !isOpen && "hidden")}>
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

        <div className={cn("my-4 border-t border-gray-800", !isOpen && "mx-2")} />

        <SidebarGroup>
          <SidebarGroupLabel className={cn(
            "text-sm font-medium text-gray-400 px-2",
            !isOpen && "sr-only"
          )}>
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  title={!isOpen ? "Account Status" : undefined}
                >
                  <Settings className="w-4 h-4 shrink-0" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "hidden")}>Account Status</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-red-400"
                  title={!isOpen ? "Log Out" : undefined}
                >
                  <LogOut className="w-4 h-4 shrink-0" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "hidden")}>Log Out</span>
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