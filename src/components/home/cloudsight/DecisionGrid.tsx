import DecisionCard from "./DecisionCard";

interface Decision {
  title: string;
  description: string;
}

interface DecisionGridProps {
  title: string;
  decisions: Decision[];
}

export default function DecisionGrid({
  title,
  decisions,
}: DecisionGridProps) {
  return (
    <section className="mt-14">
      <h3 className="text-3xl font-semibold">
        {title}
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {decisions.map((decision) => (
          <DecisionCard
            key={decision.title}
            title={decision.title}
            description={decision.description}
          />
        ))}
      </div>
    </section>
  );
}