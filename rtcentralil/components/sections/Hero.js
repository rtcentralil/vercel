import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <div className="relative p-10 rounded-md shadow-lg">
        <h1 className="text-6xl font-bold leading-tight drop-shadow-md">
          Welcome to <span className="text-yellow-400">RoboThink Central Illinois!</span>
        </h1>
        <p className="text-2xl mt-4 font-light max-w-2xl mx-auto">
          Inspiring young minds through <span className="text-blue-400">Robotics</span>,{" "}
          <span className="text-green-400">Engineering</span>, and{" "}
          <span className="text-red-400">Coding</span>.
        </p>
        <a href="#programs" className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
          Explore Programs
        </a>
      </div>
    </section>
  );
}