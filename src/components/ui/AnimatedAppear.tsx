
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-in" | "fade-up" | "scale-in" | "blur-in" | "fade-right" | "fade-left";

interface AnimatedAppearProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number; // IntersectionObserver threshold (0-1)
  once?: boolean; // Whether to animate only once
}

export const AnimatedAppear: React.FC<AnimatedAppearProps> = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 400,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    const element = document.getElementById(`animated-${Math.random().toString(36).substr(2, 9)}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, once, hasAnimated]);

  const animationClass = `animate-${animation}`;
  const style = {
    opacity: 0,
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}ms`,
    animationFillMode: "forwards" as const,
  };

  return (
    <div
      id={`animated-${Math.random().toString(36).substr(2, 9)}`}
      className={cn(className, isVisible ? animationClass : "")}
      style={isVisible ? style : { opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default AnimatedAppear;
