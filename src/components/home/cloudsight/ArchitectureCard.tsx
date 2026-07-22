import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ArchitectureCardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function ArchitectureCard({
  title,
  description,
  children,
}: ArchitectureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
    >
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-muted-foreground">
        {description}
      </p>

      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </motion.div>
  );
}

