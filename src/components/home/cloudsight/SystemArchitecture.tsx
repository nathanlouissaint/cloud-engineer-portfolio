import Section from "./Section";

export default function SystemArchitecture() {
  return (
    <Section
      eyebrow="System Architecture"
      title="How requests move through CloudSight."
      description="This section will visualize how requests flow through the application, from the browser to the database."
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <p className="text-lg text-muted-foreground">
          Interactive architecture diagram coming next.
        </p>
      </div>
    </Section>
  );
}
