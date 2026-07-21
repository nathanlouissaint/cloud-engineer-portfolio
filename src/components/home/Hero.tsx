import Link from "next/link";
import { ArrowRight, Github, Cloud, Server, Database } from "lucide-react";

interface HeroProps {
  isScrolled?: boolean;
}

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "AWS",
  "Terraform",
  "Docker",
  "PostgreSQL",
  "Prisma",
];

export default function Hero({ isScrolled = false }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
    </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-20 px-6 py-32 lg:flex-row lg:items-center">
        {/* Left Side */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Software Engineer • Cloud Engineer
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Nathan
            <br />
            Louissaint
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            I build enterprise-grade cloud applications, scalable backend
            systems, and modern SaaS products using AWS, React,
            TypeScript, Node.js, PostgreSQL, Docker and Terraform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
            >
              View CloudSight
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="https://github.com/nathanlouissaint"
              target="_blank"
              className="inline-flex items-center rounded-lg border border-border px-6 py-3 transition hover:bg-accent"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="mt-14">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Technology Stack
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm backdrop-blur"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-lg">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Engineering Snapshot
              </h3>

              <Cloud className="text-primary" />
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between rounded-xl border border-white/5 p-4">
                <div className="flex items-center gap-3">
                  <Server className="text-primary" />
                  <span>CloudSight</span>
                </div>

                <span className="text-green-400">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/5 p-4">
                <div className="flex items-center gap-3">
                  <Database className="text-primary" />
                  <span>Infrastructure</span>
                </div>

                <span>AWS</span>
              </div>

              <div className="rounded-xl border border-white/5 p-6">
                <p className="text-sm text-muted-foreground">
                  Production Features
                </p>

                <ul className="mt-4 space-y-2 text-sm">
                  <li>• JWT Authentication</li>
                  <li>• Enterprise Sessions</li>
                  <li>• Terraform Infrastructure</li>
                  <li>• Docker Deployment</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• PostgreSQL + Prisma</li>
                  <li>• AWS Cost Intelligence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
            {isScrolled ? "Exploring Portfolio" : "Scroll to discover more"}
          </div>
        </div>
      </div>
    </section>
  );
}