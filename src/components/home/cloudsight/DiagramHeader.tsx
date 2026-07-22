import { motion } from "framer-motion";

interface DiagramHeaderProps {
  title: string;
  description: string;
  highlights: string[];
}

export default function DiagramHeader({
  title,
  description,
  highlights,
}: DiagramHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <h3 className="text-3xl font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
}