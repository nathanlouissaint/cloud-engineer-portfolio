interface TimelineItemProps {
  title: string;
  summary: string;
  details: string[];
  tools: string[];
  lesson: string;
}

export default function ExperienceTimeline({
  title,
  summary,
  details,
  tools,
  lesson,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-8">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 rounded-full border-2 border-primary bg-background" />

        <div className="mt-2 h-full w-px bg-white/10" />
      </div>

      {/* Content */}
      <div className="max-w-3xl pb-20">
        <h3 className="text-2xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {summary}
        </p>

        <div className="mt-6 space-y-5">
          {details.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-8 text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tools
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 px-4 py-2 text-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h4 className="text-lg font-semibold">
            What I Learned
          </h4>

          <p className="mt-4 leading-8 text-muted-foreground">
            {lesson}
          </p>
        </div>
      </div>
    </div>
  );
}