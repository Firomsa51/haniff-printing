import { Phone, MessageCircle, FileText } from "lucide-react";
import { business, getPrimaryPhoneHref } from "@/lib/business";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="grid grid-cols-3">
        
          href={getPrimaryPhoneHref()}
          className="flex flex-col items-center justify-center gap-1 py-3 text-slate-300 focus-ring"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-medium">Call</span>
        </a>
        
          href={business.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366]/10 text-[#25D366] focus-ring"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        
          href="/contact#quote"
          className="flex flex-col items-center justify-center gap-1 py-3 text-slate-300 focus-ring"
        >
          <FileText className="h-5 w-5" />
          <span className="text-[11px] font-medium">Quote</span>
        </a>
      </div>
    </div>
  );
}
