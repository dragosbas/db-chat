import { Heart, Share2, MessagesSquare } from "lucide-react";
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
  return (
    <div className="w-80 border-r border-gray-800 bg-[#221F26]">
      <div className="p-4 border-b border-gray-800">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-400"
        />
      </div>
      <div className="overflow-y-auto h-[calc(100vh-73px)]">
        {partners.map((partner) => (
          <button
            key={partner.id}
            onClick={() => onSelectPartner(partner)}
            className={cn(
              "w-full p-4 flex flex-col hover:bg-gray-800/50 transition-colors border-b border-gray-800",
              selectedPartner?.id === partner.id && "bg-gray-800"
            )}
          >
            <div className="flex items-center space-x-3">
              <img
                src={partner.avatar}
                alt={partner.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 text-left">
                <h3 className="font-medium text-white">{partner.name}</h3>
                <p className="text-sm text-gray-400">{partner.platform}</p>
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
        ))}
      </div>
    </div>
  );
};

export default ChatPartnersList;