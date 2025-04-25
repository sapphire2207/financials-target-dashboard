import { useState, FormEvent } from "react";
import { ChevronRight, ChevronUp, Send } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";


export default function AIChat() {
  const [message, setMessage] = useState("");

  const { dashboardData } = useDashboard();
  const chatlogo = dashboardData.chat.logo;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle chat message
    setMessage("");
  };

  return (
    <div className="bg-[#f9fafb] shadow p-4 h-full relative">
      <div className="absolute top-4 right-4 bg-[#e9eff6] p-1 rounded-full cursor-pointer hover:bg-[#d4e1f0]">
        <ChevronUp className="w-4 h-4 text-[#279dd4]" />
      </div>
      <div className="flex flex-col items-center justify-center py-6 pt-16 gap-3">
        <Avatar className="h-[35px] w-[64px]">
          <AvatarImage src={chatlogo} alt="Avatar" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>

        <h2 className="text-xl font-medium text-center mb-4 pt-2">Welcome to the AI Chat Assistant</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-grow rounded p-2 justify-between border border-gray-300 bg-white">
          <input
            type="text"
            placeholder="Ask your question here.."
            className="flex-grow rounded-l text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100"
          >
            <img src="/send.svg" alt="Send" className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
