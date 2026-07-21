import ExperienceTimeline from "./ExperienceTimeline";

const journey = [
  {
    title: "Building Production Software",
    summary:
      "Working on a production website changed the way I think about writing software.",
    details: [
      "When I started, I thought software engineering was mostly about building new features. I quickly learned that most of the work is understanding the code that's already there.",
      "Before I change anything, I spend time reading the code, learning how different parts of the application work together, and figuring out where a change belongs. That helps me make updates that are easier to review, easier to test, and less likely to break something else.",
      "Working in a shared codebase has taught me that the best solution is usually the simplest one.",
    ],
    tools: ["WordPress", "PHP", "JavaScript", "Git"],
    lesson:
      "Good software starts with understanding the system before trying to change it.",
  },
  {
    title: "Moving Data Between Systems",
    summary:
      "One project I worked on involved moving data from SQL into WordPress.",
    details: [
      "At first, it sounded like copying data from one place to another. It turned out to be much more than that.",
      "Every record had to end up in the right place, every relationship had to stay connected, and every page had to work after the migration was finished.",
      "After the data was moved, I checked the content, tested the pages, and made sure everything looked and worked the way it should before the changes went live.",
    ],
    tools: ["SQL", "MySQL", "WordPress", "PHP"],
    lesson:
      "Moving data safely takes planning, testing, and patience.",
  },
  {
    title: "Maintaining the Publication Library",
    summary:
      "I spend a lot of time working on the publication library.",
    details: [
      "That includes restoring missing files, fixing broken downloads, updating existing publications, and making sure people can find the information they need.",
      "Sometimes the fix is simple. Other times I have to follow the data through different parts of the website to understand where something stopped working.",
      "Every problem teaches me a little more about how large websites are put together.",
    ],
    tools: ["WordPress", "HTML", "CSS", "PHP"],
    lesson:
      "Small improvements can make a big difference for the people using the website every day.",
  },
  {
    title: "Making Content More Accessible",
    summary:
      "Software should work for everyone.",
    details: [
      "I've worked on improving accessibility by helping with subtitles for training videos, checking caption files, and making sure content works across different devices and platforms.",
      "Accessibility isn't something I think about after a feature is finished. It's part of building the feature correctly.",
    ],
    tools: ["Accessibility", "HTML", "CSS", "VTT", "Video"],
    lesson:
      "Building something that everyone can use is part of building good software.",
  },
  {
    title: "Debugging Production Issues",
    summary:
      "Some of my favorite work is solving problems.",
    details: [
      "When an issue is reported, I don't start changing code right away.",
      "I first try to reproduce the problem. Once I can see what's happening, I trace it through the application until I understand what's causing it. Only then do I start working on a fix.",
      "After the fix is finished, I test it carefully before it goes into production.",
      "That process has made me much more patient and much more confident when solving problems.",
    ],
    tools: ["JavaScript", "Browser DevTools", "Git", "WordPress"],
    lesson:
      "Understanding the problem is usually the hardest part of fixing it.",
  },
  {
    title: "Working With People",
    summary:
      "Building software is a team effort.",
    details: [
      "I work with teammates to understand requests, talk through different approaches, test changes together, and make sure updates solve the right problem.",
      "Some of the best ideas come from simple conversations. Asking questions early usually saves time later.",
      "Working with other developers has shown me that communication is just as important as writing good code.",
    ],
    tools: ["GitHub", "WordPress", "Teams", "Agile"],
    lesson:
      "Good software is built by people who communicate well.",
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
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Building Software at CSTE
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Learning how production software is built, maintained, and improved.
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            As a Full-Stack Developer at the Council of State and Territorial
            Epidemiologists (CSTE), I help build and maintain production web
            applications that support public health professionals across the
            United States.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every project has taught me something new about building software.
            These are some of the experiences that have shaped the way I work
            today.
          </p>
        </div>

        <div className="mt-24 space-y-2">
          {journey.map((step) => (
            <ExperienceTimeline
              key={step.title}
              title={step.title}
              summary={step.summary}
              details={step.details}
              tools={step.tools}
              lesson={step.lesson}
            />
          ))}
        </div>

        <div className="mt-32 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur">
          <h3 className="text-3xl font-semibold">
            Technologies I Work With
          </h3>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold">
                  {category}
                </h4>

                <div className="mt-5 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-3xl font-semibold">
              What I've Learned
            </h3>

            <p className="mt-6 leading-8 text-muted-foreground">
              Working on production software has changed the way I build
              applications. I spend more time understanding existing systems,
              thinking through changes, testing my work, and making sure the
              next developer can understand what I've built.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              Those lessons continue to shape every project I work on, including
              CloudSight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}