import { Suspense } from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { ChevronRight } from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";

import styles from "@/styles/modules/Home.module.css";
import { Button } from "@/ui/Button";
import { cn } from "@/lib/utils";

interface HeroProps {
  isScrolled: boolean;
}

export default function Hero({
  isScrolled,
}: HeroProps) {
  return (
    <section
      id="home"
      data-scroll-section
      className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
    >
      <div className={styles.intro}>
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed=".09"
          className="flex flex-row items-center space-x-1.5"
        >
          <span className={styles.pill}>AWS</span>
          <span className={styles.pill}>Lambda</span>
          <span className={styles.pill}>CloudWatch</span>
        </div>

        <div>
          <h1
            data-scroll
            data-scroll-enable-touch-speed
            data-scroll-speed=".06"
            data-scroll-direction="horizontal"
          >
            <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
              Nathan
              <br />
              Louissaint
              <br />
            </span>

            <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
              AWS Cloud Engineer
            </span>
          </h1>

          <p
            data-scroll
            data-scroll-enable-touch-speed
            data-scroll-speed=".06"
            className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
          >
            Building real-world AWS cloud projects focused on automation,
            cost optimization, monitoring, serverless architecture and
            operational excellence.
          </p>
        </div>

        <span
          data-scroll
          data-scroll-enable-touch-speed
          data-scroll-speed=".06"
          className="flex flex-row items-center space-x-1.5 pt-6"
        >
          <Link
            href="https://www.linkedin.com/in/nathan-louissaint-3a17a3387/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Linked In
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>

          <Link
            href="https://github.com/nathanlouissaint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              GitHub
            </Button>
          </Link>
        </span>

        <div
          className={cn(
            styles.scroll,
            isScrolled && styles["scroll--hidden"]
          )}
        >
          Scroll to discover
          <TriangleDownIcon className="mt-1 animate-bounce" />
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="-.01"
        id={styles["canvas-container"]}
        className="mt-14 h-full w-full xl:mt-0"
      >
        <Suspense fallback={<span>Loading...</span>}>
          <Spline scene="/assets/spline/scene.splinecode" />
        </Suspense>
      </div>
    </section>
  );
}