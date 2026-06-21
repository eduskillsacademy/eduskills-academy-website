import { MessageCircle } from "lucide-react";
import { academy } from "../data/academy";

export default function WhatsAppFloat() {
  return (
    <a
      href={academy.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg px-4 py-3.5 hover:scale-105 transition-transform"
    >
      <MessageCircle size={22} fill="white" className="text-[#25D366]" />
      <span className="hidden sm:inline text-sm font-semibold pr-1">WhatsApp</span>
    </a>
  );
}
