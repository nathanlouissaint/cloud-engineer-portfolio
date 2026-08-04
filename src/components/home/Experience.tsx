import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";

interface JourneyStep {
  title: string;
  url?: string;
  summary: string;
  details: string[];
  tools: string[];
  lesson: string;
}

const journey: JourneyStep[] = [
  {
    title: "Building the CSTE Injury Surveillance Toolkit",
    url: "https://injurytoolkit.cste.org",
    summary:
      "I built a WordPress website that helps public health professionals find injury surveillance guidance, data sources, reports, and programming resources.",
    details: [
      "I organized complex public health information into a toolkit for state, local, and territorial epidemiologists working in injury and overdose surveillance.",
      "I built the responsive interface with WordPress and Divi. I created reusable layouts, navigation, and content sections that made the resources easier to explore.",
      "I used PHP, JavaScript, HTML, and CSS to customize the website, publish content, fix issues, and support the live platform.",
    ],
    tools: [
      "WordPress",
      "Divi",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    lesson:
      "Complex information becomes useful when people can easily find and understand it.",
  },
  {
    title: "Improving Search and Tracking for CSTE Data Standardization",
    url: "https://datastandardization.cste.org",
    summary:
      "I improved the site's search setup and added Google Site Kit to understand how public health professionals find and use its resources.",
    details: [
      "The website supports epidemiologists, public health informatics teams, and data managers looking for guidance on standardizing public health data.",
      "I improved the page titles, descriptions, headings, internal links, and mobile experience to help search engines understand and index the website.",
      "I connected Google Site Kit to track search traffic, popular pages, visitor activity, and how users discover the site's resources.",
    ],
    tools: [
      "Technical SEO",
      "Google Site Kit",
      "GA4",
      "Google Search Console",
    ],
    lesson:
      "SEO helps the right people find the website, while tracking shows which resources they use.",
  },
  {
    title: "Moving the CSTE Publications Library to the Cloud",
    url: "https://www.cste.org/page/CSTEPublications",
    summary:
      "I helped move CSTE's publications library and SQL data from on-site servers to the cloud.",
    details: [
      "Before moving the system, I reviewed the database, publication records, document links, and the frontend table to understand how everything worked together.",
      "I backed up the original database and moved the publication records into the cloud database while keeping the titles, categories, links, and other information connected.",
      "After the move, I checked record totals, tested document links, fixed missing information, and made sure the frontend table displayed the correct data.",
      "I tested the main user actions before the new system went live and kept the old system available in case we needed to roll back.",
    ],
    tools: [
      "SQL",
      "MySQL",
      "Cloud Migration",
      "Data Testing",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    lesson:
      "Moving a system to the cloud requires careful backups, testing, and a clear recovery plan.",
  },
  {
    title: "Maintaining the Publication Library",
    summary:
      "I maintain the publication library and fix problems that prevent people from accessing public health resources.",
    details: [
      "I restore missing files, repair broken downloads, update publication records, and make sure users can find the correct documents.",
      "When something breaks, I trace the record from the database to the page to find where the problem started.",
      "I test every update before it goes live to make sure the record, link, and file all work correctly.",
    ],
    tools: [
      "WordPress",
      "SQL",
      "PHP",
      "HTML",
      "CSS",
    ],
    lesson:
      "A website is only useful when its information stays accurate and available.",
  },
  {
    title: "Making Content More Accessible",
    summary:
      "I improve digital content so more people can use it across different devices and platforms.",
    details: [
      "I prepare and review subtitles for training videos and fix timing or formatting problems in caption files.",
      "I test content across devices to catch accessibility and display problems before it is published.",
      "I include accessibility in the work from the beginning instead of treating it as a final step.",
    ],
    tools: [
      "Accessibility",
      "HTML",
      "CSS",
      "VTT",
      "Video",
    ],
    lesson:
      "Accessibility is a basic part of building a useful product.",
  },
  {
    title: "Debugging Production Issues",
    summary:
      "I find and fix issues that affect CSTE's live websites and their users.",
    details: [
      "When someone reports a problem, I first recreate it so I can understand exactly what is happening.",
      "I follow the issue through the page, code, content system, and database until I find the cause.",
      "After making the fix, I test the affected feature and related pages before releasing the update.",
    ],
    tools: [
      "JavaScript",
      "Browser DevTools",
      "Git",
      "WordPress",
    ],
    lesson:
      "The best fixes come from finding the real cause instead of guessing.",
  },
  {
    title: "Working Across Teams",
    summary:
      "I work with technical and nontechnical teammates to turn requests into working website updates.",
    details: [
      "I ask questions early to understand the problem, the users affected, and what the finished update needs to do.",
      "I explain technical limits and progress in clear language so everyone understands what is happening.",
      "I work with teammates to test changes and confirm that each update solves the original problem.",
    ],
    tools: [
      "GitHub",
      "WordPress",
      "Microsoft Teams",
      "Agile",
    ],
    lesson:
      "Clear communication saves time and leads to better software.",
  },
];

const technologies = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "PHP",
    "SQL",
    "HTML",
    "CSS",
  ],
  Frameworks: [
    "React",
    "Next.js",
    "Express",
    "WordPress",
  ],
  Data: [
    "PostgreSQL",
    "MySQL",
    "Prisma",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Docker",
    "REST APIs",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Building Software at CSTE
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Building and supporting software used in public health.
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            As a Full-Stack Developer at the Council of State and Territorial
            Epidemiologists, I build and maintain websites used by public health
            professionals across the United States.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My work includes building websites, moving data to the cloud,
            connecting databases to frontend pages, improving search,
            measuring website activity, improving accessibility, and fixing
            issues on live systems.
          </p>
        </motion.div>

        <div className="mt-24 space-y-2">
          {journey.map((step, index) => (
            <ExperienceTimeline
              key={step.title}
              index={index + 1}
              delay={index * 0.12}
              title={step.title}
              url={step.url}
              summary={step.summary}
              details={step.details}
              tools={step.tools}
              lesson={step.lesson}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}