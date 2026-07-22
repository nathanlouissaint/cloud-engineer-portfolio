import Section from "./Section";

export default function Problem() {
  return (
    <Section
      eyebrow="The Problem"
      title="Cloud cost visibility is more complicated than it should be."
      description="Engineering teams often rely on multiple AWS services, spreadsheets, dashboards, and manual reporting to understand cloud spending. That makes it difficult to answer simple questions about where money is going and what will happen next."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-2xl font-semibold">
            Common Challenges
          </h3>

          <ul className="mt-6 space-y-4 text-muted-foreground leading-8">
            <li>Multiple AWS tools for different tasks</li>
            <li>Manual reporting every month</li>
            <li>Limited forecasting</li>
            <li>Difficult cost optimization</li>
            <li>No single engineering dashboard</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="text-2xl font-semibold">
            CloudSight Goal
          </h3>

          <p className="mt-6 leading-8 text-muted-foreground">
            Build one platform that brings together cloud costs,
            forecasting, optimization, reporting, and operational insights
            into a single application designed for engineering teams.
          </p>
        </div>
      </div>
    </Section>
  );
}


