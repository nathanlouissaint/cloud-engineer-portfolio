import { useEffect, useRef, useState } from "react";

import Container from "@/components/layout/Container";
import About from "@/components/home/About";
import CloudSight from "@/components/home/cloudsight/CloudSight";
import Ecommerce from "@/components/home/ecommerce/Ecommerce";
import Experience from "@/components/home/Experience";
import FeaturedProject from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  const refScrollContainer = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    async function initializeScroll() {
      const Locomotive = (await import("locomotive-scroll")).default;

      if (refScrollContainer.current) {
        new Locomotive({
          el: refScrollContainer.current,
          smooth: true,
        });
      }
    }

    void initializeScroll();

    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Hero isScrolled={isScrolled} />

        <TechStack />

        <Experience />

        <About />

        <CloudSight />

        <Ecommerce />

        <FeaturedProject />
      </div>
    </Container>
  );
}