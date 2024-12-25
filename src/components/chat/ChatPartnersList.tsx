import { cn } from "@/lib/utils";
import { ChatPartner } from "@/services/types";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  // Separate locked (favorite) and regular chats
  const lockedPartners = partners.filter((partner) => partner.isLocked);
  const regularPartners = partners.filter((partner) => !partner.isLocked);

  return (
    <div className="w-80 border-r border-gray-800 bg-[#1A1F2C]">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        {/* Favorites Section */}
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4">Favorites</h2>
          <div className="space-y-2">
            {lockedPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                isSelected={selectedPartner?.id === partner.id}
                onSelect={onSelectPartner}
              />
            ))}
          </div>
        </div>

        {/* Regular Chats Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Messages</h2>
          <div className="space-y-2">
            {regularPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                isSelected={selectedPartner?.id === partner.id}
                onSelect={onSelectPartner}
              />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

// Extracted PartnerCard component for better organization
const PartnerCard = ({
  partner,
  isSelected,
  onSelect,
}: {
  partner: ChatPartner;
  isSelected: boolean;
  onSelect: (partner: ChatPartner) => void;
}) => {
  return (
    <div
      className={cn(
        "p-3 rounded-lg cursor-pointer transition-colors",
        "hover:bg-[#2A2F3C]",
        "border border-transparent",
        isSelected ? "bg-[#2A2F3C] border-[#9b87f5]" : ""
      )}
      onClick={() => onSelect(partner)}
    >
      <div className="flex items-start gap-2">
        <img
          src={partner.avatar}
          alt={partner.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-white truncate">
              {partner.name}
            </h3>
            <span className="text-xs text-gray-400 whitespace-nowrap ml-1">
              {partner.timestamp}
            </span>
          </div>
          {partner.lastMessage && (
            <p className="text-sm text-gray-400 truncate mt-1">
              {partner.lastMessage}
            </p>
          )}
          <div className="flex items-center gap-3 mt-2">
            {Object.entries({
              messages: partner.messages,
              likes: partner.likes,
              follows: partner.follows,
              shares: partner.shares,
            }).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center gap-0.5 text-gray-400"
              >
                <value.icon size={12} />
                <span className="text-xs">{value.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPartnersList;
