import { motion } from "framer-motion";

interface Insight {
  title: string;
  problem: string;
  solution: string;
}

interface EngineeringInsightsProps {
  title: string;
  insights: Insight[];
}

export default function EngineeringInsights({
  title,
  insights,
}: EngineeringInsightsProps) {
  return (
    <section className="mt-16">
      <h3 className="text-3xl font-bold tracking-tight">
        {title}
      </h3>

      <div className="mt-8 space-y-8">
        {insights.map((insight) => (
          <motion.article
            key={insight.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h4 className="text-xl font-semibold">
              {insight.title}
            </h4>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-red-400">
                  Challenge
                </p>

                <p className="mt-2 leading-7 text-muted-foreground">
                  {insight.problem}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                  Solution
                </p>

                <p className="mt-2 leading-7 text-muted-foreground">
                  {insight.solution}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}