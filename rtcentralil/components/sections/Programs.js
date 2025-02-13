import Image from "next/image";

const programs = ["robotics", "coding", "engineering"];

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#003366]">Our Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program) => (
            <div key={program} className="p-10 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-all transform hover:-translate-y-2">
              <Image src={`/images/${program}.png`} alt={`${program} Program`} width={300} height={200} className="mx-auto" priority />
              <h3 className="text-2xl font-semibold mt-4 text-[#003366] capitalize">{program}</h3>
              <p className="mt-2 text-gray-700">Explore our engaging {program} program designed to inspire creativity and innovation.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}