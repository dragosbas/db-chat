import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./chat/MainSidebar";
import ChatPartnersList from "./chat/ChatPartnersList";
import ChatArea from "./chat/ChatArea";
import { ScrollArea } from "@/components/ui/scroll-area";

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

const mockChatPartners: ChatPartner[] = [
  {
    id: "1",
    name: "Alice Smith",
    avatar: "/placeholder.svg",
    platform: "WhatsApp",
    likes: 124,
    shares: 45,
    messages: 1289,
    lastMessage: "See you tomorrow!",
    timestamp: "10:30 AM",
    isLocked: false,
  },
  {
    id: "2",
    name: "Bob Johnson",
    avatar: "/placeholder.svg",
    platform: "Facebook",
    likes: 89,
    shares: 23,
    messages: 567,
    lastMessage: "Thanks for the update",
    timestamp: "Yesterday",
    isLocked: true,
  },
  {
    id: "3",
    name: "Carol Williams",
    avatar: "/placeholder.svg",
    platform: "Instagram",
    likes: 234,
    shares: 56,
    messages: 890,
    lastMessage: "Great idea!",
    timestamp: "2d ago",
    isLocked: false,
  },
  {
    id: "4",
    name: "David Brown",
    avatar: "/placeholder.svg",
    platform: "Twitter",
    likes: 167,
    shares: 34,
    messages: 456,
    lastMessage: "Let's discuss tomorrow",
    timestamp: "3d ago",
    isLocked: true,
  },
  {
    id: "5",
    name: "Eva Martinez",
    avatar: "/placeholder.svg",
    platform: "LinkedIn",
    likes: 312,
    shares: 78,
    messages: 789,
    lastMessage: "Project update sent",
    timestamp: "4d ago",
    isLocked: false,
  },
  {
    id: "6",
    name: "Frank Wilson",
    avatar: "/placeholder.svg",
    platform: "WhatsApp",
    likes: 145,
    shares: 43,
    messages: 678,
    lastMessage: "Meeting confirmed",
    timestamp: "5d ago",
    isLocked: true,
  },
  {
    id: "7",
    name: "Grace Lee",
    avatar: "/placeholder.svg",
    platform: "Facebook",
    likes: 278,
    shares: 67,
    messages: 945,
    lastMessage: "Documents received",
    timestamp: "1w ago",
    isLocked: false,
  },
  {
    id: "8",
    name: "Henry Garcia",
    avatar: "/placeholder.svg",
    platform: "Instagram",
    likes: 189,
    shares: 45,
    messages: 567,
    lastMessage: "Will review soon",
    timestamp: "1w ago",
    isLocked: true,
  },
  {
    id: "9",
    name: "Isabel Chen",
    avatar: "/placeholder.svg",
    platform: "Twitter",
    likes: 223,
    shares: 54,
    messages: 789,
    lastMessage: "Perfect, thanks!",
    timestamp: "2w ago",
    isLocked: false,
  },
  {
    id: "10",
    name: "Jack Taylor",
    avatar: "/placeholder.svg",
    platform: "LinkedIn",
    likes: 156,
    shares: 32,
    messages: 456,
    lastMessage: "Looking forward to it",
    timestamp: "2w ago",
    isLocked: true,
  },
  {
    id: "11",
    name: "Kelly Anderson",
    avatar: "/placeholder.svg",
    platform: "WhatsApp",
    likes: 289,
    shares: 76,
    messages: 890,
    lastMessage: "Updates coming soon",
    timestamp: "3w ago",
    isLocked: false,
  },
  {
    id: "12",
    name: "Liam Murphy",
    avatar: "/placeholder.svg",
    platform: "Facebook",
    likes: 178,
    shares: 43,
    messages: 567,
    lastMessage: "Great progress!",
    timestamp: "3w ago",
    isLocked: true,
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
      <div className="flex h-screen w-full overflow-hidden bg-[#1A1F2C]">
        <MainSidebar isOpen={isMainMenuOpen} setIsOpen={setIsMainMenuOpen} />
        <div className="flex flex-1">
          <ChatPartnersList
            partners={mockChatPartners}
            selectedPartner={selectedPartner}
            onSelectPartner={setSelectedPartner}
          />
          <ChatArea selectedPartner={selectedPartner} messages={mockMessages} />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ChatLayout;
