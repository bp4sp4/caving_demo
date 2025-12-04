"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { cn } from "../../../lib/utils";

type Card = {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
};

interface CarouselProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

interface CarouselContextValue {
  current: number;
  setCurrent: (index: number) => void;
  direction: number;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export function Carousel({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, speed === "fast" ? 3000 : speed === "normal" ? 5000 : 7000);

    return () => clearInterval(interval);
  }, [items.length, speed, isPaused]);

  return (
    <CarouselContext.Provider value={{ current, setCurrent, direction: direction === "left" ? 1 : -1 }}>
      <div
        ref={containerRef}
        className={cn("relative w-full overflow-hidden", className)}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "min-w-full transition-transform duration-500 ease-in-out",
                index === current ? "translate-x-0" : index < current ? "-translate-x-full" : "translate-x-full"
              )}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === current ? "w-8 bg-white" : "w-2 bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function Card({ card, index }: { card: Card; index: number }) {
  const context = useContext(CarouselContext);
  const isActive = context?.current === index;

  return (
    <div
      className={cn(
        "relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden transition-all duration-500 mx-4",
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${card.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
        <div className="mb-2 text-sm md:text-base font-medium text-white/80">{card.category}</div>
        <h3 className="text-2xl md:text-4xl font-bold mb-6">{card.title}</h3>
        <div className="text-base md:text-lg max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {card.content}
        </div>
      </div>
    </div>
  );
}

