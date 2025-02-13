import { useEffect, useState } from 'react';

export default function AnimatedCounter({ targetNumber }) {
  const [count, setCount] = useState(50000);

  useEffect(() => {
    // If we've already reached the target, do nothing
    if (count === targetNumber) return;

    // Increment by +1 every 1 second
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= targetNumber) {
          clearInterval(timer);
          return targetNumber;
        }
        return prev + 1;
      });
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [count, targetNumber]);

  return (
    <section className="py-16 bg-jellyBean text-white text-center">
      {/* 
        Replace `bg-jellyBean` with any of your brand colors 
        (e.g., bg-persianRed, bg-fireBush, etc.) 
        as defined in tailwind.config.js
      */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Join {count.toLocaleString()}+ Kids Around the World
        </h2>
      </div>
    </section>
  );
}