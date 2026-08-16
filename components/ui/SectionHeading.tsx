export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest uppercase text-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 text-base sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
