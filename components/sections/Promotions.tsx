import { Megaphone } from "lucide-react";
import Container from "../ui/Container";
import { getActivePromotion } from "@/lib/promotions";
import { business } from "@/lib/business";

export default function Promotions() {
  const promo = getActivePromotion();

  return (
    <section className="py-10">
      <Container>
        <div className="card-surface gradient-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Megaphone className="h-8 w-8 text-gold shrink-0" />
          <div>
            <h3 className="font-semibold text-white">
              {promo ? promo.title : "Ask Us About Our Latest Offers"}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {promo
                ? promo.description
                : `Reach out on WhatsApp (${business.phones[0].value}) to hear about current offers.`}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
