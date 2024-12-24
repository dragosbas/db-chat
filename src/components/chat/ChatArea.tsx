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
    <div className="flex-1 flex flex-col bg-[#222222]">
      {selectedPartner ? (
        <>
          <div className="p-4 border-b border-gray-800">
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
  );
};

export default ChatArea;