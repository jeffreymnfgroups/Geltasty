'use client'
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress (0-100%)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial call

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-2.5">
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white transition-all duration-500 ease-out hover:from-yellow-600 hover:to-yellow-700 hover:scale-110 animate-in slide-in-from-bottom-2 fade-in"
          >
            {/* Circular Progress Indicator */}
            <div className="relative z-10 flex items-center justify-center">
              <svg 
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" 
                viewBox="0 0 48 48"
              >
                {/* Rotated group for progress circles */}
                <g transform="rotate(-90 24 24)">
                  {/* Background circle */}
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="3"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
                    className="transition-all duration-300"
                  />
                </g>
                {/* Arrow icon in center - pointing north */}
                <path 
                  d="M17 20l7-7m0 0l7 7m-7-7v18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
