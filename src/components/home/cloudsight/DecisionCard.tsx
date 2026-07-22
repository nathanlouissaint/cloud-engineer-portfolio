import { motion } from "framer-motion";

interface DecisionCardProps {
  title: string;
  description: string;
}

export default function DecisionCard({
  title,
  description,
}: DecisionCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </motion.article>
  );
}
