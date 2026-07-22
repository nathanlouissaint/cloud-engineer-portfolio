import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="py-24 scroll-mt-28"
    >
      <div className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>

        <div className="mt-14">
          {children}
        </div>
      </div>
    </section>
  );
}