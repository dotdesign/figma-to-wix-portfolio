
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
  once = true,
  threshold = 0.1,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) observer.unobserve(ref.current);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once, threshold]);

  const getAnimation = () => {
    switch (direction) {
      case "up":
        return "translate-y-8";
      case "down":
        return "translate-y-[-2rem]";
      case "left":
        return "translate-x-8";
      case "right":
        return "translate-x-[-2rem]";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${getAnimation()}`,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
