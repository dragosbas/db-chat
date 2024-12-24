import { Heart, Share2, MessagesSquare, Clock, ArrowUpDown, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

interface ChatPartnersListProps {
  partners: ChatPartner[];
  selectedPartner: ChatPartner | null;
  onSelectPartner: (partner: ChatPartner) => void;
}

const ChatPartnersList = ({
  partners,
  selectedPartner,
  onSelectPartner,
}: ChatPartnersListProps) => {
  const lockedPartners = partners.filter(partner => partner.isLocked);
  const unlockedPartners = partners.filter(partner => !partner.isLocked);

  return (
    <div className="w-80 border-r border-gray-800 bg-[#221F26] flex flex-col">
      <div className="p-4 border-b border-gray-800 space-y-4">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-400"
        />
        <div className="flex justify-between items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-gray-400 hover:text-white">
              <Clock className="w-4 h-4" />
              <span>Sort by</span>
              <ArrowUpDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Last message time</DropdownMenuItem>
              <DropdownMenuItem>Number of messages</DropdownMenuItem>
              <DropdownMenuItem>Most likes</DropdownMenuItem>
              <DropdownMenuItem>Most shares</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {lockedPartners.length > 0 && (
          <div className="flex-none">
            <div className="px-4 py-2 bg-gray-800/30 text-sm text-gray-400">
              Locked Chats
            </div>
            <ScrollArea className="h-[30vh]">
              {lockedPartners.map((partner) => (
                <ChatPartnerItem
                  key={partner.id}
                  partner={partner}
                  isSelected={selectedPartner?.id === partner.id}
                  onSelect={onSelectPartner}
                />
              ))}
            </ScrollArea>
          </div>
        )}

        <div className="flex-1">
          <div className="px-4 py-2 bg-gray-800/30 text-sm text-gray-400">
            Active Chats
          </div>
          <ScrollArea className="h-[calc(100vh-15rem)]">
            {unlockedPartners.map((partner) => (
              <ChatPartnerItem
                key={partner.id}
                partner={partner}
                isSelected={selectedPartner?.id === partner.id}
                onSelect={onSelectPartner}
              />
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

const ChatPartnerItem = ({
  partner,
  isSelected,
  onSelect,
}: {
  partner: ChatPartner;
  isSelected: boolean;
  onSelect: (partner: ChatPartner) => void;
}) => (
  <button
    onClick={() => onSelect(partner)}
    className={cn(
      "w-full p-4 flex flex-col hover:bg-gray-800/50 transition-colors border-b border-gray-800",
      isSelected && "bg-gray-800"
    )}
  >
    <div className="flex items-center space-x-3">
      <div className="relative">
        <img
          src={partner.avatar}
          alt={partner.name}
          className="w-10 h-10 rounded-full"
        />
        {partner.isLocked && (
          <Lock className="w-4 h-4 absolute -top-1 -right-1 text-yellow-500" />
        )}
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium text-white">{partner.name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400 truncate max-w-[150px]">{partner.lastMessage}</p>
          <span className="text-xs text-gray-500 ml-2">{partner.timestamp}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
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
);

export default ChatPartnersList;
