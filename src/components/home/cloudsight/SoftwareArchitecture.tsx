import DecisionGrid from "./DecisionGrid";
import DiagramHeader from "./DiagramHeader";
import EngineeringInsights from "./EngineeringInsights";
import Figure from "./Figure";
import Section from "./Section";

const decisions = [
  {
    title: "Layered Architecture",
    description:
      "CloudSight separates the frontend, API, business logic, persistence layer, and cloud integrations into distinct layers. Each layer has a single responsibility, making the system easier to maintain and extend.",
  },
  {
    title: "Repository Pattern",
    description:
      "Repositories encapsulate all database operations so the service layer never interacts directly with Prisma. This keeps persistence concerns isolated from business logic.",
  },
  {
    title: "Service Layer",
    description:
      "Controllers remain lightweight by delegating business rules to dedicated services. This structure improves readability, testing, and long-term maintainability.",
  },
  {
    title: "Prisma ORM",
    description:
      "Prisma provides a type-safe interface between the application and PostgreSQL, reducing runtime errors while simplifying database access.",
  },
  {
    title: "AWS SDK Integration",
    description:
      "CloudSight communicates with AWS services through the AWS SDK, allowing the application to retrieve cloud cost data, budgets, and configuration without coupling those integrations to the API layer.",
  },
];

const insights = [
  {
    title: "Separating Business Logic",
    problem:
      "As an application grows, mixing HTTP handling, business rules, and database access inside controllers makes features difficult to maintain and nearly impossible to test independently.",
    solution:
      "CloudSight delegates request handling to controllers, business logic to services, and persistence to repositories. Each layer has a single responsibility, making the application easier to understand, extend, and test.",
  },
  {
    title: "Reducing Database Coupling",
    problem:
      "Allowing services to communicate directly with the ORM tightly couples business logic to the database implementation, increasing maintenance costs as the application evolves.",
    solution:
      "Repositories encapsulate all Prisma operations behind a consistent interface, allowing services to focus entirely on business rules without depending on database details.",
  },
  {
    title: "Designing for Future Growth",
    problem:
      "Cloud cost platforms naturally grow in complexity as authentication, forecasting, reporting, alerting, and cloud integrations are introduced over time.",
    solution:
      "A layered architecture establishes clear architectural boundaries that make new capabilities easier to integrate without affecting unrelated parts of the application.",
  },
];

export default function SoftwareArchitecture() {
  return (
    <Section
      id="software-architecture"
      eyebrow="Architecture"
      title="Software Architecture"
      description="CloudSight follows a layered architecture that separates presentation, business logic, persistence, and cloud integrations. Each layer owns a single responsibility, making the platform easier to understand, maintain, and evolve as new capabilities are added."
    >
      <DiagramHeader
        title="Layered System Architecture"
        description="CloudSight is organized into independent layers that separate presentation, business logic, persistence, and cloud integrations. This architectural approach keeps responsibilities well defined, improves maintainability, and makes the platform easier to extend as new features are introduced."
        highlights={[
          "5 Architecture Layers",
          "Repository Pattern",
          "Service Layer",
          "Prisma ORM",
          "PostgreSQL",
          "AWS SDK",
        ]}
      />

      <Figure
        src="/images/cloudsight/software-architecture.png"
        alt="CloudSight software architecture diagram"
        caption="Figure 1. Layered software architecture illustrating how requests move from the React frontend through the Express API, business services, repositories, Prisma ORM, PostgreSQL, and AWS cloud integrations."
      />

      <DecisionGrid
        title="Key Engineering Decisions"
        decisions={decisions}
      />

      <EngineeringInsights
        title="Engineering Decisions & Tradeoffs"
        insights={insights}
      />
    </Section>
  );
}