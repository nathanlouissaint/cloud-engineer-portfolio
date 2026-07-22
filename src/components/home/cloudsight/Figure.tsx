import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DiagramModal from "./DiagramModal";

interface FigureProps {
  src: string;
  alt: string;
  caption: string;
}

export default function Figure({
  src,
  alt,
  caption,
}: FigureProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <>
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="my-14 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
      >
        <div className="border-b border-white/10 px-8 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Engineering Diagram
          </p>
        </div>

        <div className="bg-zinc-900/50 p-8">
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.995,
            }}
            className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <img
              src={src}
              alt={alt}
              className="w-full transition duration-300 group-hover:brightness-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
              <span className="rounded-lg border border-white/20 bg-black/60 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                Click to enlarge
              </span>
            </div>
          </motion.button>
        </div>

        <figcaption className="border-t border-white/10 px-8 py-6 text-sm leading-7 text-muted-foreground">
          {caption}
        </figcaption>
      </motion.figure>

      <DiagramModal
        open={open}
        image={src}
        alt={alt}
        caption={caption}
        onClose={() => setOpen(false)}
      />
    </>
  );
}