import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./chat/MainSidebar";
import ChatPartnersList from "./chat/ChatPartnersList";
import ChatArea from "./chat/ChatArea";

interface ChatPartner {
  id: string;
  name: string;
  avatar: string;
  platform: string;
  likes: number;
  shares: number;
  messages: number;
}

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

const mockChatPartners: ChatPartner[] = [
  {
    id: "1",
    name: "Alice Smith",
    avatar: "/placeholder.svg",
    platform: "WhatsApp",
    likes: 124,
    shares: 45,
    messages: 1289,
  },
  {
    id: "2",
    name: "Bob Johnson",
    avatar: "/placeholder.svg",
    platform: "Facebook",
    likes: 89,
    shares: 23,
    messages: 567,
  },
];

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hey, how are you?",
    sender: "Alice Smith",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    content: "I'm good, thanks! How about you?",
    sender: "You",
    timestamp: "10:31 AM",
  },
];

const ChatLayout = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState<ChatPartner | null>(null);

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#1A1F2C]">
        <MainSidebar isOpen={isMainMenuOpen} setIsOpen={setIsMainMenuOpen} />
        <ChatPartnersList
          partners={mockChatPartners}
          selectedPartner={selectedPartner}
          onSelectPartner={setSelectedPartner}
        />
        <ChatArea selectedPartner={selectedPartner} messages={mockMessages} />
      </div>
    </SidebarProvider>
  );
};

export default ChatLayout;