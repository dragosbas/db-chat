import { cn } from "@/lib/utils";

interface ChatPartner {
  id: string;
  name: string;
  avatar: string;
  platform: string;
}

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

interface ChatAreaProps {
  selectedPartner: ChatPartner | null;
  messages: Message[];
}

const ChatArea = ({ selectedPartner, messages }: ChatAreaProps) => {
  return (
    <div className="flex flex-1">
      <div className="flex-1 flex flex-col bg-[#222222]">
        {selectedPartner ? (
          <>
            <div className="flex border-b border-gray-800 p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedPartner.avatar}
                  alt={selectedPartner.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-medium text-white">{selectedPartner.name}</h2>
                  <p className="text-sm text-gray-400">{selectedPartner.platform}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "max-w-[70%] p-3 rounded-lg",
                    message.sender === "You"
                      ? "ml-auto bg-[#6E59A5] text-white"
                      : "bg-gray-800 text-white"
                  )}
                >
                  <p>{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-400"
                />
                <button className="px-4 py-2 bg-[#6E59A5] text-white rounded-lg hover:opacity-90 transition-opacity">
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Select a chat to start messaging
          </div>
        )}
      </div>
      
      {selectedPartner && (
        <div className="w-80 bg-[#1A1F2C] border-l border-gray-800">
          <div className="p-6">
            <div className="text-center mb-6">
              <img
                src={selectedPartner.avatar}
                alt={selectedPartner.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-white mb-1">
                {selectedPartner.name}
              </h2>
              <p className="text-gray-400">{selectedPartner.platform}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Profile Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-white">
                    <span>Status</span>
                    <span className="text-green-400">Online</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Location</span>
                    <span>New York, USA</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Joined</span>
                    <span>January 2024</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Languages</span>
                    <span>English, Spanish</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Contact Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-white">
                    <span>Email</span>
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Phone</span>
                    <span>+1 234 567 890</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Social Links</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-white">
                    <span>Twitter</span>
                    <span>@username</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>LinkedIn</span>
                    <span>profile/username</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatArea;