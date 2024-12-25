import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./chat/MainSidebar";
import ChatPartnersList from "./chat/ChatPartnersList";
import ChatArea from "./chat/ChatArea";
import { useQuery } from "@tanstack/react-query";
import { messageService } from "@/services/messageService";
import { useToast } from "@/components/ui/use-toast";

interface ChatPartner {
  id: string;
  name: string;
  avatar: string;
  platform: string;
  likes: number;
  shares: number;
  messages: number;
  lastMessage: string;
  timestamp: string;
  isLocked: boolean;
}

const CURRENT_USER = "dr.deak.cardio";

const ChatLayout = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState<ChatPartner | null>(null);
  const { toast } = useToast();

  const { data: messages = [] } = useQuery({
    queryKey: ['messages', CURRENT_USER],
    queryFn: () => messageService.getMessages(CURRENT_USER),
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to load messages. Please try again later.",
        variant: "destructive",
      });
    },
  });

  // Transform API messages to ChatPartner format
  const chatPartners = messages.map((msg: any, index: number) => ({
    id: index.toString(),
    name: msg.fromusername,
    avatar: "/placeholder.svg",
    platform: "Platform",
    likes: msg.likecount || 0,
    shares: msg.sharecount || 0,
    messages: msg.totalmessages || 0,
    lastMessage: msg.concatenatedcomments || "No message",
    timestamp: new Date(msg.lasteventtimestamp).toLocaleString(),
    isLocked: false,
  }));

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#1A1F2C]">
        <MainSidebar isOpen={isMainMenuOpen} setIsOpen={setIsMainMenuOpen} />
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