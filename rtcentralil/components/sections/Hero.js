import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section relative w-full h-[600px] flex items-center justify-center text-center">
      {/* Optional overlay for improved text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative p-10 rounded-lg shadow-xl max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-fireBush">RoboThink Central Illinois</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-light">
          Inspiring young minds through{" "}
          <span className="text-turquoiseBlue">Robotics</span>,{" "}
          <span className="text-persianRed">Engineering</span>, and{" "}
          <span className="text-oliveGreen">Coding</span>.
        </p>
        <a
          href="https://centralil.myrobothink.com/event"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-8 py-4 bg-fireBush text-black font-semibold rounded-lg hover:bg-persianRed transition"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
}