import { useState } from "react";
import { Menu, MessageSquare, Heart, Share2, MessagesSquare } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="flex h-screen bg-background">
      {/* Main Menu */}
      <div
        className={cn(
          "w-64 bg-card border-r border-border transition-all duration-300 ease-in-out",
          isMainMenuOpen ? "translate-x-0" : "-translate-x-64"
        )}
      >
        <div className="p-4 border-b border-border">
          <button
            onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Platforms</h2>
          <div className="space-y-2">
            <button className="w-full p-3 flex items-center space-x-3 hover:bg-accent rounded-lg transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp</span>
            </button>
            <button className="w-full p-3 flex items-center space-x-3 hover:bg-accent rounded-lg transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>Facebook</span>
            </button>
            <button className="w-full p-3 flex items-center space-x-3 hover:bg-accent rounded-lg transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>Instagram</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chat Partners List */}
      <div className="w-80 border-r border-border">
        <div className="p-4 border-b border-border">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full p-2 rounded-lg bg-accent/50 border border-border"
          />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-73px)]">
          {mockChatPartners.map((partner) => (
            <button
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              className={cn(
                "w-full p-4 flex flex-col hover:bg-accent/50 transition-colors border-b border-border",
                selectedPartner?.id === partner.id && "bg-accent"
              )}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={partner.avatar}
                  alt={partner.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.platform}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  {partner.likes}
                </div>
                <div className="flex items-center">
                  <Share2 className="w-4 h-4 mr-1" />
                  {partner.shares}
                </div>
                <div className="flex items-center">
                  <MessagesSquare className="w-4 h-4 mr-1" />
                  {partner.messages}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedPartner ? (
          <>
            <div className="p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedPartner.avatar}
                  alt={selectedPartner.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-medium">{selectedPartner.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {selectedPartner.platform}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {mockMessages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "max-w-[70%] p-3 rounded-lg",
                    message.sender === "You"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-accent"
                  )}
                >
                  <p>{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 rounded-lg bg-accent/50 border border-border"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLayout;