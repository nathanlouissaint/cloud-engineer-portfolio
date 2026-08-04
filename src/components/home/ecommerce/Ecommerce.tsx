import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  Code2,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    value: "$10.4K",
    label: "Total sales",
    detail: "Generated during the project",
    icon: ShoppingBag,
  },
  {
    value: "243",
    label: "Orders",
    detail: "Completed customer purchases",
    icon: BarChart3,
  },
  {
    value: "+28%",
    label: "Conversion lift",
    detail: "After improving the buying experience",
    icon: TrendingUp,
  },
  {
    value: "-32%",
    label: "Cost per acquisition",
    detail: "After testing new ad creative",
    icon: TrendingDown,
  },
];

const work = [
  {
    icon: LayoutTemplate,
    title: "Store and landing pages",
    description:
      "Designed the storefront, product pages, and landing pages around a clear path from first visit to purchase.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion testing",
    description:
      "Tested product-page layouts, trust-focused visuals, messaging, and checkout changes to remove friction.",
  },
  {
    icon: Megaphone,
    title: "Paid acquisition",
    description:
      "Built and tested Meta ad campaigns, compared creative performance, and adjusted campaigns using customer data.",
  },
  {
    icon: Code2,
    title: "Performance",
    description:
      "Improved the site's speed and usability because slow or confusing pages directly reduce completed purchases.",
  },
];

const funnel = [
  {
    step: "01",
    title: "Attract",
    description:
      "Test ad creative and messaging to bring qualified visitors to the store.",
  },
  {
    step: "02",
    title: "Build trust",
    description:
      "Use focused landing pages, clear product information, and strong visuals.",
  },
  {
    step: "03",
    title: "Convert",
    description:
      "Remove unnecessary steps and make checkout fast and easy to complete.",
  },
];

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            E-commerce Case Study
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
                Building a store—and learning how to make it convert.
              </h2>
            </div>

            <p className="text-lg leading-8 text-muted-foreground">
              I built an e-commerce brand from the ground up, from the
              storefront and landing pages to the sales funnel and paid
              traffic strategy.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >
          <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                The project
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                Design, marketing, and customer behavior in one project.
              </h3>

              <p className="mt-6 leading-7 text-muted-foreground">
                Building the store taught me that a clean interface is not
                enough. The messaging, page speed, customer trust, ad creative,
                and checkout experience all affect whether someone buys.
              </p>

              <p className="mt-5 leading-7 text-muted-foreground">
                I used sales and advertising data to find weak points, test
                changes, and improve the path from ad click to completed order.
              </p>
            </div>

            <div className="relative min-h-[340px] border-t border-white/10 lg:min-h-[520px] lg:border-l lg:border-t-0">
              <Image
                src="/assets/projects/ecommerce/analytics/store-performance.png"
                alt="E-commerce analytics showing total sales, orders, average order value, and sales by traffic source"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-left-top"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center justify-between">
                <metric.icon className="h-5 w-5 text-primary" />

                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Result
                </span>
              </div>

              <p className="mt-8 text-4xl font-bold tracking-tight text-primary">
                {metric.value}
              </p>

              <h3 className="mt-3 font-semibold">{metric.label}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {metric.detail}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              What I worked on
            </p>

            <h3 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Improving the entire buying experience.
            </h3>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The work went beyond building the website. I tested how people
              discovered the brand, evaluated the product, and moved through
              checkout.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {work.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h4 className="mt-6 text-xl font-semibold">{item.title}</h4>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Customer journey
            </p>

            <h3 className="mt-5 text-4xl font-bold tracking-tight">
              From ad click to completed order.
            </h3>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {funnel.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-background/40 p-7">
                  <span className="text-sm font-semibold text-primary">
                    {item.step}
                  </span>

                  <h4 className="mt-5 text-xl font-semibold">{item.title}</h4>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {index < funnel.length - 1 && (
                  <ArrowDown className="mx-auto my-4 h-5 w-5 text-primary lg:absolute lg:-right-4 lg:top-1/2 lg:m-0 lg:-translate-y-1/2 lg:-rotate-90" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              What I learned
            </p>

            <h3 className="mt-5 text-4xl font-bold tracking-tight">
              Small changes can move real numbers.
            </h3>
          </div>

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              This project taught me to work like both a developer and a
              marketer. The interface had to look good, but it also had to load
              quickly, communicate value, build trust, and help customers
              complete a purchase.
            </p>

            <p>
              The biggest lesson was simple: assumptions are not results. I had
              to test ideas, study customer behavior, and let the data determine
              what changed next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}