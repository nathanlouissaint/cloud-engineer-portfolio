export default function TechStack() {
  const sections = [
    {
      title: "Frontend",
      technologies: ["React", "Next.js", "TypeScript"],
      description:
        "I focus on building interfaces that are fast, responsive, and easy to understand. Every component has a clear purpose, making the application easier to maintain as it grows.",
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Express", "REST APIs"],
      description:
        "I organize backend applications into clear layers. Routes handle requests, services contain business logic, repositories manage data access, and the database stays isolated from the rest of the application.",
    },
    {
      title: "Database",
      technologies: ["PostgreSQL", "Prisma"],
      description:
        "I use relational databases for structured application data and rely on Prisma to keep queries type-safe and easy to work with.",
    },
    {
      title: "Cloud",
      technologies: ["AWS", "Terraform", "Docker"],
      description:
        "Infrastructure should be repeatable. I use Docker for consistent environments and Terraform to define cloud resources as code instead of configuring them manually.",
    },
  ];

  return (
    <section id="engineering" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            How I Build Software
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            The tools matter.
            <br />
            The approach matters more.
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            Every project starts with the same goal: build something that&apos;s
            easy to understand, easy to maintain, and ready to grow. I choose
            technologies based on the problems I&apos;m solving, not because they&apos;re
            popular.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold">
                {section.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {section.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 leading-8 text-muted-foreground">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}