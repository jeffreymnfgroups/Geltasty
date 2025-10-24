"use client";
import { useState, useEffect } from "react";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords = ({ words, duration = 2000, className }: FlipWordsProps) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const startAnimation = () => {
      setIsAnimating(true);
      timeout = setTimeout(() => {
        setCurrentWord((prev) => {
          const currentIndex = words.indexOf(prev);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setIsAnimating(false);
      }, duration / 2);
    };

    const interval = setInterval(startAnimation, duration);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [words, duration]);

  return (
    <div className={`relative inline-block ${className}`}>
      <span
        className={`inline-block transition-all duration-300 ${
          isAnimating ? "transform -translate-y-4 opacity-0" : "transform translate-y-0 opacity-100"
        }`}
      >
        {currentWord}
      </span>
    </div>
  );
};
