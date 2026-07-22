import { motion } from "framer-motion";

interface FlowCardProps {
  step: number;
  title: string;
  description: string;
}

export default function FlowCard({
  step,
  title,
  description,
}: FlowCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -4,
      }}
      className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8"
    >
      <div className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
        {step}
      </div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </motion.article>
  );
}