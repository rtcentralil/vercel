import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <Image src="/images/hero.jpg" alt="Hero background" fill priority style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative p-10 rounded-md shadow-lg">
        <h2 className="text-5xl font-bold leading-tight">Welcome to RoboThink Central Illinois!</h2>
        <p className="text-xl mt-4 font-light">Inspiring young minds through Robotics, Engineering, and Coding.</p>
      </div>
    </section>
  );
}