import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-center text-white bg-jellyBean">
      {/* If you have a video or image, consider layering it */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative p-10 rounded-md shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-fireBush">RoboThink Central Illinois!</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-light max-w-2xl mx-auto">
          Inspiring young minds through <span className="text-turquoiseBlue">Robotics</span>,{" "}
          <span className="text-persianRed">Engineering</span>, and{" "}
          <span className="text-oliveGreen">Coding</span>.
        </p>
        <a
          href="#programs"
          className="mt-6 inline-block px-6 py-3 bg-fireBush text-black font-semibold rounded-lg hover:bg-persianRed transition"
        >
          Explore Programs
        </a>
      </div>
    </section>
  );
}