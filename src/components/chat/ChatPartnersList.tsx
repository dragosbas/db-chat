import { cn } from "@/lib/utils";
import { ChatPartner } from "@/services/types";

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
    <div className="w-80 border-r border-gray-800 bg-[#1A1F2C] overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Messages</h2>
        <div className="space-y-2">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={cn(
                "p-3 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors",
                selectedPartner?.id === partner.id && "bg-gray-800/50"
              )}
              onClick={() => onSelectPartner(partner)}
            >
              <div className="flex items-start space-x-3">
                <img
                  src={partner.avatar}
                  alt={partner.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-white truncate">
                      {partner.name}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                      {partner.timestamp}
                    </span>
                  </div>
                  {partner.lastMessage && (
                    <p className="text-sm text-gray-400 truncate mt-1">
                      {partner.lastMessage}
                    </p>
                  )}
                  <div className="flex items-center space-x-4 mt-2">
                    {Object.entries({
                      messages: partner.messages,
                      likes: partner.likes,
                      follows: partner.follows,
                      shares: partner.shares,
                    }).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center space-x-1 text-gray-400"
                      >
                        <value.icon size={14} />
                        <span className="text-xs">{value.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPartnersList;