import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "outline";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-electric via-purple to-magenta text-white hover:opacity-90",
  secondary: "bg-navy-800 text-white border border-white/10 hover:border-cyan/50",
  whatsapp: "bg-[#25D366] text-navy-950 hover:opacity-90",
  outline: "border border-white/20 text-white hover:border-gold hover:text-gold",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-200 focus-ring min-h-[44px]";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  target,
}: CommonProps & { href: string; target?: string }) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  type = "button",
  onClick,
  disabled,
}: CommonProps & {
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variantClasses[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {icon}
      {children}
    </button>
  );
}
