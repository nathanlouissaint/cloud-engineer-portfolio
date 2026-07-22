import { motion } from "framer-motion";

const stats = [
  { value: "5", label: "Architecture Layers" },
  { value: "15+", label: "REST APIs" },
  { value: "100%", label: "TypeScript" },
  { value: "AWS", label: "Cloud Platform" },
];

export default function ArchitectureSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 grid gap-6 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="text-4xl font-bold text-primary">
            {stat.value}
          </div>

          <div className="mt-3 text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}