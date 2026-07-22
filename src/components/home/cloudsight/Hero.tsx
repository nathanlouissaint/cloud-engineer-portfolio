import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pb-24"
    >
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Engineering Case Study
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tight">
          CloudSight
        </h1>

        <p className="mt-8 text-2xl leading-10 text-muted-foreground">
          A production-inspired cloud cost management platform built to
          explore modern SaaS architecture, cloud infrastructure, and
          full-stack engineering practices.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "React",
            "TypeScript",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Docker",
            "AWS",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}