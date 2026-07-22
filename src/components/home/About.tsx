export default function About() {
  return (
    <section
      id="about"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            What I&apos;m Building
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            CloudSight
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            CloudSight started as a way to better understand AWS costs.
            As I continued building it, the project grew into a complete
            full-stack application that brings together cloud spending,
            forecasting, authentication, reporting, and infrastructure
            monitoring in one place.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My goal wasn&apos;t to recreate the AWS Console. I wanted to build
            an application that helps engineering teams quickly understand
            what&apos;s happening across their cloud environment without jumping
            between multiple services and dashboards.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold">
              Why I Built It
            </h3>

            <p className="mt-6 leading-8 text-muted-foreground">
              AWS provides a huge amount of information, but understanding
              costs, usage, budgets, and operational health often means
              switching between several different services.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              CloudSight brings that information together into one
              application so engineering teams can spend less time
              searching for data and more time making decisions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold">
              What It Does
            </h3>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p>Tracks AWS cloud spending.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p>Forecasts future infrastructure costs.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p>Detects unusual spending patterns.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p>Monitors budgets and cloud resources.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p>Provides secure authentication and session management.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p>Generates reports for engineering teams.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}