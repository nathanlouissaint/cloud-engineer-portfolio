import Figure from "./Figure";
import FlowGrid from "./FlowGrid";
import Section from "./Section";

const steps = [
  {
    title: "React Frontend",
    description:
      "A user action triggers an HTTP request from the React application to retrieve dashboard data from the backend.",
  },
  {
    title: "Express Route",
    description:
      "The request is matched to the appropriate API route, where middleware performs authentication, validation, and request preprocessing.",
  },
  {
    title: "Controller",
    description:
      "The controller handles HTTP-specific concerns and delegates business operations to the service layer without containing application logic.",
  },
  {
    title: "Service Layer",
    description:
      "Business logic is executed here, coordinating domain operations while remaining independent of HTTP and database implementation details.",
  },
  {
    title: "Repository & Prisma",
    description:
      "Repositories isolate data access and use Prisma to execute type-safe queries against PostgreSQL.",
  },
  {
    title: "JSON Response",
    description:
      "The resulting data is returned as JSON to the client, allowing React to efficiently update the user interface.",
  },
];

export default function RequestLifecycle() {
  return (
    <Section
      id="request-lifecycle"
      eyebrow="Request Flow"
      title="Request Lifecycle"
      description="Every request follows a consistent path through CloudSight's architecture. Separating routing, business logic, and persistence keeps each layer focused on a single responsibility while making the system easier to test and maintain."
    >
      <Figure
        src="/images/cloudsight/request-lifecycle.png"
        alt="CloudSight request lifecycle diagram"
        caption="Figure 2. End-to-end request lifecycle showing how an HTTP request flows through the CloudSight application before the interface is updated."
      />

      <FlowGrid steps={steps} />
    </Section>
  );
}