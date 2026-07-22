import { AnimatePresence, motion } from "framer-motion";

interface DiagramModalProps {
  open: boolean;
  image: string;
  alt: string;
  caption: string;
  onClose: () => void;
}

export default function DiagramModal({
  open,
  image,
  alt,
  caption,
  onClose,
}: DiagramModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="relative max-h-[90vh] w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg bg-black/70 px-4 py-2 text-sm text-white transition hover:bg-black"
            >
              ✕
            </button>

            <img
              src={image}
              alt={alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />

            <p className="mt-6 text-center text-sm text-zinc-300">
              {caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}