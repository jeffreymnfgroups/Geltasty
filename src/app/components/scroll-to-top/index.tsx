'use client'
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

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
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-2.5">
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl transition-all duration-500 ease-out hover:from-purple-700 hover:to-blue-700 hover:scale-110 hover:shadow-purple-500/50 animate-in slide-in-from-bottom-2 fade-in"
          >
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-md group-hover:blur-lg opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <svg 
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </div>
            
            {/* Ripple effect on click */}
            <div className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-100 transition-transform duration-150"></div>
          </div>
        )}
      </div>
    </div>
  );
}
