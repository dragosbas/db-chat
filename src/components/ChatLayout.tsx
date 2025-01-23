import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./chat/MainSidebar";
import ChatPartnersList from "./chat/ChatPartnersList";
import ChatArea from "./chat/ChatArea";
import { useQuery } from "@tanstack/react-query";
import { messageService } from "@/services/messageService";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Heart, UserPlus, Share2 } from "lucide-react";
import { ChatPartner } from "@/services/types";
import { useIsMobile } from "@/hooks/use-mobile";

const CURRENT_USER = "ecoron.ro";

const ChatLayout = () => {
  const [selectedPartner, setSelectedPartner] = useState<ChatPartner | null>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const { data: messages = [] } = useQuery({
    queryKey: ['messages', CURRENT_USER],
    queryFn: () => messageService.getMessages(CURRENT_USER),
    meta: {
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to load messages. Please try again later.",
          variant: "destructive",
        });
      }
    }
  });

  // Transform API messages to ChatPartner format with proper icons
  const chatPartners = messages.map((msg: any, index: number) => ({
    id: index.toString(),
    name: msg.fromusername,
    avatar: "/placeholder.svg",
    platform: "Platform",
    likes: {
      icon: Heart,
      count: msg.likecount || 0
    },
    shares: {
      icon: Share2,
      count: msg.sharecount || 0
    },
    messages: {
      icon: MessageSquare,
      count: msg.totalmessages || 0
    },
    follows: {
      icon: UserPlus,
      count: msg.followcount || 0
    },
    lastMessage: msg.concatenatedcomments || "",
    timestamp: new Date(msg.lasteventtimestamp).toLocaleString(),
    isLocked: false,
  }));

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#1A1F2C]">
        <MainSidebar isOpen={!isMobile} setIsOpen={() => {}} />
        <div className="flex flex-1">
          <ChatPartnersList
            partners={chatPartners}
            selectedPartner={selectedPartner}
            onSelectPartner={setSelectedPartner}
          />
          <ChatArea selectedPartner={selectedPartner} messages={[]} />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ChatLayout;