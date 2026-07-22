import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function Section({
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="py-20"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>

        <h2 className="mt-6 text-5xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="mt-8 text-xl leading-9 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="mt-16">
        {children}
      </div>
    </motion.section>
  );
}