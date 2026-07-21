import Link from "next/link";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Shield,
  TrendingUp,
  Activity,
  Database,
  Cloud,
  Server,
  Cpu,
} from "lucide-react";

const technologies = [
  "React 19",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Terraform",
  "AWS",
  "GitHub Actions",
];

const highlights = [
  {
    icon: Shield,
    title: "Enterprise Authentication",
    description:
      "JWT authentication with refresh token rotation, persistent sessions, and secure authorization.",
  },
  {
    icon: TrendingUp,
    title: "Cloud Cost Forecasting",
    description:
      "Predicts future AWS spending using historical cloud usage and forecasting services.",
  },
  {
    icon: Activity,
    title: "Operational Intelligence",
    description:
      "Real-time dashboards, budget monitoring, alerts, anomaly detection, and executive reporting.",
  },
];

const architecture = [
  {
    icon: Cloud,
    label: "AWS",
  },
  {
    icon: Server,
    label: "Express API",
  },
  {
    icon: Cpu,
    label: "Business Services",
  },
  {
    icon: Database,
    label: "PostgreSQL",
  },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Featured Project
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            CloudSight
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            CloudSight is an enterprise cloud cost intelligence platform built
            to help engineering leaders understand AWS spending, forecast future
            cloud costs, detect anomalies, and monitor infrastructure health
            through production-grade dashboards.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Left */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur">
            <h3 className="text-2xl font-semibold">
              Engineering Highlights
            </h3>

            <div className="mt-8 space-y-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5"
                >
                  <div className="rounded-xl bg-primary/10 p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="mb-5 text-lg font-semibold">
                Technology Stack
              </h4>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="https://github.com/nathanlouissaint"
                target="_blank"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Github className="mr-2 h-4 w-4" />
                View Repository
              </Link>

              <Link
                href="#architecture"
                className="inline-flex items-center rounded-lg border border-border px-6 py-3 font-medium transition hover:bg-accent"
              >
                View Architecture
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center rounded-lg border border-border px-6 py-3 font-medium transition hover:bg-accent"
              >
                Contact Me
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            <h3 className="text-xl font-semibold">
              Architecture
            </h3>

            <div className="mt-8 space-y-4">
              {architecture.map((step, index) => (
                <div key={step.label}>
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 p-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-medium">
                        {step.label}
                      </p>
                    </div>
                  </div>

                  {index < architecture.length - 1 && (
                    <div className="my-3 flex justify-center text-primary">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h4 className="font-semibold">
                Production Features
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>✓ JWT Authentication</li>
                <li>✓ Refresh Token Rotation</li>
                <li>✓ Session Management</li>
                <li>✓ Forecasting Engine</li>
                <li>✓ Budget Monitoring</li>
                <li>✓ Docker Deployment</li>
                <li>✓ Terraform Infrastructure</li>
                <li>✓ GitHub Actions CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}