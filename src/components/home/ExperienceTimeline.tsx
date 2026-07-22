import {
  Lightbulb,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  index: number;
  delay: number;
  title: string;
  summary: string;
  details: string[];
  tools: string[];
  lesson: string;
}

export default function ExperienceTimeline({
  index,
  delay,
  title,
  summary,
  details,
  tools,
  lesson,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex gap-12 transition-all duration-300 lg:gap-16"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/20">
          {String(index).padStart(2, "0")}
        </div>

        <div className="mt-3 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent transition-all duration-300 group-hover:from-primary group-hover:via-primary/70" />
      </div>

      {/* Content */}
      <div className="max-w-2xl pb-28">
        <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
          {summary}
        </p>

        <div className="mt-8 space-y-6">
          {details.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-8 text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" />

            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Tools
            </h4>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-primary/40 hover:bg-primary/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-xl rounded-2xl border border-primary/20 bg-primary/5 p-6 backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:bg-primary/10">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400 transition-transform duration-300 group-hover:rotate-6" />

            <h4 className="text-lg font-semibold">
              What I Learned
            </h4>
          </div>

          <p className="mt-4 leading-8 text-muted-foreground">
            {lesson}
          </p>
        </div>
      </div>
    </motion.div>
  );
}