import ArchitectureSummary from "./ArchitectureSummary";
import CaseStudyNav from "./CaseStudyNav";
import EngineeringOverview from "./EngineeringOverview";
import Hero from "./Hero";
import Problem from "./Problem";
import RequestLifecycle from "./RequestLifecycle";
import SoftwareArchitecture from "./SoftwareArchitecture";

export default function CloudSight() {
  return (
    <section id="cloudsight" className="py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 xl:grid-cols-[260px_1fr]">
        <CaseStudyNav />

        <div>
          <Hero />

          <Problem />

          <EngineeringOverview />

          <ArchitectureSummary />

          <SoftwareArchitecture />

          <RequestLifecycle />
        </div>
      </div>
    </section>
  );
}