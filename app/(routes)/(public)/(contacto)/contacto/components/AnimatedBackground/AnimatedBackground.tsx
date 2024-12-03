"use client";

import { useEffect, useState } from "react";

import { iNumberBG } from "@/interfaces";
import { AnimatedNumber } from "../AnimatedNumber";

export function AnimatedBackground() {
  const [numbers, setNumbers] = useState<iNumberBG[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          value: Math.random() * 1000,
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {numbers.map((number) => (
        <div
          key={number.id}
          style={{
            position: "absolute",
            left: `${number.x}%`,
            top: `${number.y}%`,
          }}
        >
          <AnimatedNumber value={number.value} />
        </div>
      ))}
    </div>
  );
}
