import { motion } from "framer-motion";
import useActiveSection from "@/hooks/useActiveSection";

const sections = [
  {
    id: "cloudsight",
    label: "Overview",
  },
  {
    id: "problem",
    label: "Problem",
  },
  {
    id: "engineering-overview",
    label: "Engineering Overview",
  },
  {
    id: "software-architecture",
    label: "Architecture",
  },
  {
    id: "request-lifecycle",
    label: "Request Lifecycle",
  },
];

export default function CaseStudyNav() {
  const activeSection = useActiveSection();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="sticky top-28 hidden h-fit xl:block"
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          CloudSight
        </p>

        <nav className="mt-6">
          <ul className="space-y-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id} className="relative">
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-primary" />
                  )}

                  <a
                    href={`#${section.id}`}
                    className={`block rounded-lg px-4 py-2 pl-6 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
}