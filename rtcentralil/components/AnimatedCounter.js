import { useEffect, useState } from 'react';

const AnimatedCounter = ({ targetNumber }) => {
  const [count, setCount] = useState(50000);

  useEffect(() => {
    let start = 50000;
    const end = targetNumber;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = totalDuration / (end - start);

    let timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + 1;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <h2 className="text-4xl font-bold text-[#003366] mb-6">
      Join {count.toLocaleString()}+ Kids Around the World
    </h2>
  );
};

export default AnimatedCounter;
