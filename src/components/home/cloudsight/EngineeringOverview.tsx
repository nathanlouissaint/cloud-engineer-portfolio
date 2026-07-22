import Section from "./Section";
import ArchitectureCard from "./ArchitectureCard";

const stats = [
  {
    label: "Production APIs",
    value: "15+",
  },
  {
    label: "Database Tables",
    value: "6",
  },
  {
    label: "Architecture Layers",
    value: "5",
  },
  {
    label: "Cloud Platform",
    value: "AWS",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GitHub Actions",
];

export default function EngineeringOverview() {
  return (
     <Section
      id="engineering-overview"
      eyebrow="Engineering Overview"
      title="Designed like a production cloud platform."
      description="CloudSight was built to demonstrate how a modern SaaS application is designed, deployed, and maintained. Instead of focusing only on dashboards, the project emphasizes architecture, scalability, authentication, infrastructure, and developer experience."
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <ArchitectureCard
          title="CloudSight"
          description="A full-stack cloud intelligence platform for monitoring cloud costs, forecasting future spending, detecting anomalies, and generating reports."
        >
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {technology}
              </span>
            ))}
          </div>
        </ArchitectureCard>

        <ArchitectureCard
          title="Project Snapshot"
          description="Key metrics that describe the architecture."
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-background/40 p-5"
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ArchitectureCard>
      </div>
    </Section>
  );
}