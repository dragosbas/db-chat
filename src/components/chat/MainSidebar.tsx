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
      "relative bg-[#221F26] text-white border-r border-gray-800 transition-all duration-300 ease-in-out h-screen",
      isOpen ? "w-64" : "w-14" // Made collapsed state thinner
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute -right-3 top-6 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-[#221F26] border border-gray-800 text-gray-200 hover:text-white hover:bg-gray-800 transition-all duration-300",
          !isOpen && "rotate-180"
        )}
      >
        <ChevronLeft className="h-5 w-5" /> {/* Made toggle icon larger */}
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
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors",
                    !isOpen && "justify-center px-2" // Center icons in collapsed state
                  )}
                  title={!isOpen ? "Profile" : undefined}
                >
                  <User className="w-4 h-4 shrink-0" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "hidden")}>Profile</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors",
                    !isOpen && "justify-center px-2" // Center icons in collapsed state
                  )}
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
                      !isOpen && "justify-center px-2", // Center icons in collapsed state
                      platform.status === "connected" ? "text-green-400" : "text-gray-400"
                    )}
                    title={!isOpen ? platform.name : undefined}
                  >
                    <div className={cn(
                      "flex items-center gap-2",
                      !isOpen && "justify-center" // Center icons in collapsed state
                    )}>
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
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors",
                    !isOpen && "justify-center px-2" // Center icons in collapsed state
                  )}
                  title={!isOpen ? "Account Status" : undefined}
                >
                  <Settings className="w-4 h-4 shrink-0" />
                  <span className={cn("transition-opacity duration-200", !isOpen && "hidden")}>Account Status</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-red-400",
                    !isOpen && "justify-center px-2" // Center icons in collapsed state
                  )}
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