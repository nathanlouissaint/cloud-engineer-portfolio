import Problem from "./Problem";
import EngineeringOverview from "./EngineeringOverview";
import SystemArchitecture from "./SystemArchitecture";

export default function CloudSight() {
  return (
    <section id="cloudsight" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Problem />

        <EngineeringOverview />

        <SystemArchitecture />
      </div>
    </section>
  );
}