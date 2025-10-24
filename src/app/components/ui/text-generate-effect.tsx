"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  visible = true,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  visible?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    if (!visible) return;
    
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter, scope, visible]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold mb-4", className)}>
      <div className="mt-0">
        <div className="dark:text-white text-white text-xl sm:text-2xl md:text-3xl leading-snug tracking-normal font-display font-bold">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
