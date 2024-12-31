import { cn } from "@/lib/utils";

interface ChatPartner {
  id: string;
  name: string;
  avatar: string;
  platform: string;
  lastMessage?: string;
  timestamp?: string;
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
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;

  return (
    <div className="flex flex-1 min-w-0">
      <div className="flex-1 flex flex-col bg-[#222222] min-w-0">
        {selectedPartner ? (
          <>
            <div className="flex flex-col border-b border-gray-800 p-4">
              <div className="flex items-start space-x-4">
                <img
                  src={selectedPartner.avatar}
                  alt={selectedPartner.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h2 className="font-medium text-white text-lg">{selectedPartner.name}</h2>
                  <p className="text-sm text-gray-400">
                    {selectedPartner.platform}
                    {selectedPartner.timestamp && (
                      <span className="ml-2 text-xs opacity-70">
                        Last active: {selectedPartner.timestamp}
                      </span>
                    )}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Location</span>
                      <span className="text-white">New York, USA</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Languages</span>
                      <span className="text-white">English, Spanish</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Email</span>
                      <span className="text-white">contact@example.com</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Phone</span>
                      <span className="text-white">+1 234 567 890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedPartner.lastMessage && (
                <div className={cn(
                  "max-w-[70%] p-3 rounded-lg",
                  "bg-gray-800 text-white"
                )}>
                  <p>{selectedPartner.lastMessage}</p>
                  {selectedPartner.timestamp && (
                    <p className="text-xs mt-1 opacity-70">{selectedPartner.timestamp}</p>
                  )}
                </div>
              )}
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
      
      {selectedPartner && isLandscape && (
        <div className="hidden lg:block w-80 bg-[#1A1F2C] border-l border-gray-800 flex-shrink-0">
          <div className="p-4">
            {/* Video Preview */}
            <div className="aspect-video bg-black/50 rounded-lg mb-4 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400">Video Preview</span>
              </div>
            </div>
            
            {/* Subtitles History */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Subtitles History</h3>
              <div className="space-y-3">
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-white">Hello, how are you today?</p>
                  <span className="text-xs text-gray-400">00:00:15</span>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-white">I'm doing great, thank you!</p>
                  <span className="text-xs text-gray-400">00:00:18</span>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-white">Let's discuss the project details.</p>
                  <span className="text-xs text-gray-400">00:00:22</span>
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