import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "John Doe",
    text: "RoboThink has been amazing for my child's learning and development!",
  },
  {
    name: "Jane Smith",
    text: "A fantastic program that makes learning robotics fun and interactive!",
  },
  {
    name: "Alex Johnson",
    text: "Highly recommend RoboThink to any parent looking for quality STEM education!",
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl italic text-gray-700">
            "{testimonials[current].text}"
          </p>
          <p className="mt-4 text-lg sm:text-xl font-bold text-persianRed">
            - {testimonials[current].name}
          </p>
        </div>
      </div>
    </section>
  );
}