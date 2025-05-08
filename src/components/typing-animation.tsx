// src/components/typing-animation.tsx
"use client";

import type { LucideProps } from 'lucide-react';
import React, { useState, useEffect, useRef, type ReactElement } from 'react';

interface TypingAnimationProps {
  texts: string[];
  icons?: ReactElement<LucideProps>[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingAnimation({
  texts,
  icons,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentIcon, setCurrentIcon] = useState<ReactElement<LucideProps> | null>(null);

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (icons && icons.length > 0) {
      setCurrentIcon(icons[currentIndex % icons.length]);
    }
  }, [currentIndex, icons]);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
          typingTimeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          // Brief pause before typing next text
          typingTimeoutRef.current = setTimeout(handleTyping, typingSpeed / 2); 
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
          typingTimeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Pause at the end of typing
          typingTimeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            // No need to call handleTyping here, it will be called by charIndex > 0 condition
          }, pauseDuration);
        }
      }
    };

    // Start the effect
    typingTimeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Cleanup function to clear timeout
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [charIndex, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);


  return (
    <h2 className="text-2xl font-semibold text-accent sm:text-3xl md:text-4xl flex items-center justify-center lg:justify-start">
       {currentIcon && React.cloneElement(currentIcon, { className: `h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 mr-2 transition-opacity duration-300 ${isDeleting ? 'opacity-50' : 'opacity-100'}` })}
      <span>{displayText}</span>
      <span className="animate-blink border-r-2 border-accent ml-1 h-7 sm:h-8 md:h-9" aria-hidden="true"></span>
      <style jsx global>{`
        .animate-blink {
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: hsl(var(--accent)) }
        }
      `}</style>
    </h2>
  );
}
