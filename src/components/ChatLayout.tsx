import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./chat/MainSidebar";
import ChatPartnersList from "./chat/ChatPartnersList";
import ChatArea from "./chat/ChatArea";
import { useQuery } from "@tanstack/react-query";
import { messageService } from "@/services/messageService";

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

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

const CURRENT_USER = "dr.deak.cardio";

const ChatLayout = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState<ChatPartner | null>(null);

  const { data: messages = [] } = useQuery({
    queryKey: ['messages', CURRENT_USER],
    queryFn: () => messageService.getMessages(CURRENT_USER),
  });

  // Transform API messages to ChatPartner format
  const chatPartners = messages.map((msg, index) => ({
    id: index.toString(),
    name: msg.fromusername,
    avatar: "/placeholder.svg",
    platform: "Platform",
    likes: msg.likecount,
    shares: msg.sharecount,
    messages: msg.totalmessages,
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