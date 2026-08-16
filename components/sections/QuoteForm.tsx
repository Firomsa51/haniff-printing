"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Upload, Send, AlertCircle } from "lucide-react";
import { services } from "@/lib/services";
import { buildQuoteMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import { Button } from "../ui/Button";

const ACCEPTED_TYPES = ["application/pdf", "image/png", "image/jpeg", "image/svg+xml"];
const MAX_SIZE_MB = 10;

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: preselected,
    quantity: "",
    requirements: "",
    preferredDate: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [error, setError] = useState("");

  const handleFile = (f: File | null) => {
    setFileError("");
    if (!f) {
      setFile(null);
      return;
    }
    if (!ACCEPTED_TYPES.includes(f.type)) {
      setFileError("Only PDF, PNG, JPG, JPEG, or SVG files are accepted.");
      return;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setFileError(`File must be smaller than ${MAX_SIZE_MB}MB.`);
      return;
    }
    setFile(f);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.service.trim()) {
      setError("Please fill in your name, phone number, and select a service.");
      return;
    }

    const message = buildQuoteMessage({ ...form, hasFile: !!file });
    const url = buildWhatsappUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-6 sm:p-8 space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg bg-navy-950 border border-white/10 px-4 py-3 text-white text-sm focus-ring"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
            Phone *
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-lg bg-navy-950 border border-white/10 px-4 py-3 text-white text-sm focus-ring"
            placeholder="09xxxxxxxx"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1.5">
            Service *
          </label>
          <select
            id="service"
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-lg bg-navy-950 border border-white/10 px-4 py-3 text-white text-sm focus-ring"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-slate-300 mb-1.5">
            Quantity
          </label>
          <input
            id="quantity"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="w-full rounded-lg bg-navy-950 border border-white/10 px-4 py-3 text-white text-sm focus-ring"
            placeholder="e.g. 100 pcs"
          />
        </div>
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-slate-300 mb-1.5">
          Requirements
        </label>
        <textarea
          id="requirements"
          rows={4}
          value={form.requirements}
          onChange={(e) => setForm({ ...form, requirements: e.target.value })}
          className="w-full rounded-lg bg-navy-950 border border-white/10 px-4 py-3 text-white text-sm focus-ring resize-none"
          placeholder="Describe sizes, colors, design ideas, etc."
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-slate-300 mb-1.5">
            Preferred Date
          </label>
          <input
            id="date"
            type="date"
            value={form.preferredDate}
            onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
            className="w-full rounded-lg bg-navy-950 border border-white/10 px-4 py-3 text-white text-sm focus-ring"
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-slate-300 mb-1.5">
            Reference File
          </label>
          <label
            htmlFor="file"
            className="flex items-center gap-2 w-full rounded-lg bg-navy-950 border border-dashed border-white/20 px-4 py-3 text-sm text-slate-400 cursor-pointer hover:border-cyan/50 focus-ring"
          >
            <Upload className="h-4 w-4" />
            {file ? file.name : "PDF, PNG, JPG, JPEG, SVG"}
          </label>
          <input
            id="file"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.svg"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0] || null)}
          />
          {fileError && <p className="mt-1.5 text-xs text-magenta">{fileError}</p>}
        </div>
      </div>

      {file && !fileError && (
        <p className="text-xs text-slate-500 flex items-start gap-1.5">
          <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
          File uploads aren&apos;t sent automatically yet — after WhatsApp opens, please attach{" "}
          <span className="text-slate-300">{file.name}</span> in the chat.
        </p>
      )}

      {error && <p className="text-sm text-magenta">{error}</p>}

      <Button type="submit" variant="whatsapp" className="w-full" icon={<Send className="h-4 w-4" />}>
        Send Quote Request via WhatsApp
      </Button>
    </form>
  );
}
