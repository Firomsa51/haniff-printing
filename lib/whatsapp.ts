import { business } from "./business";

interface QuotePayload {
  name: string;
  phone: string;
  service: string;
  quantity: string;
  requirements: string;
  preferredDate: string;
  hasFile: boolean;
}

export function buildQuoteMessage(data: QuotePayload): string {
  const lines = [
    "Hello HANIFF Printing,",
    "I would like to request a quotation.",
    "",
    `Name: ${data.name || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Service: ${data.service || "-"}`,
    `Quantity: ${data.quantity || "-"}`,
    `Requirements: ${data.requirements || "-"}`,
    `Preferred Date: ${data.preferredDate || "-"}`,
  ];
  if (data.hasFile) {
    lines.push("", "(I will attach my design/reference file in this chat.)");
  }
  return lines.join("\n");
}

export function buildWhatsappUrl(message: string): string {
  return `${business.whatsappLink}?text=${encodeURIComponent(message)}`;
}
