import { Promotion } from "@/types";

// Set active: true and fill in real details to display a promotion.
// No prices or discounts are invented by default.
export const promotions: Promotion[] = [
  {
    id: "default",
    title: "Ask Us About Our Latest Offers",
    description:
      "Contact HANIFF Printing on WhatsApp to hear about current offers on selected services.",
    active: false,
  },
];

export const getActivePromotion = () => promotions.find((p) => p.active);
