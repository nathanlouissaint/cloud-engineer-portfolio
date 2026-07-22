import FlowCard from "./FlowCard";

interface FlowStep {
  title: string;
  description: string;
}

interface FlowGridProps {
  steps: FlowStep[];
}

export default function FlowGrid({
  steps,
}: FlowGridProps) {
  return (
    <section className="mt-14">
      <h3 className="text-3xl font-semibold">
        Request Breakdown
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <FlowCard
            key={step.title}
            step={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}