import { useEffect, useState } from "react";

const SECTION_IDS = [
  "cloudsight",
  "problem",
  "engineering-overview",
  "software-architecture",
  "request-lifecycle",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState("cloudsight");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}