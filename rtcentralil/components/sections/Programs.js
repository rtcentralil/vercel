import Image from "next/image";

export default function Programs() {
  const programs = [
    { title: "After School", image: "/images/slide@5x.png" },
    { title: "Camps", image: "/images/monkey bars@5x.png" },
    { title: "Workshops", image: "/images/tori dancing@5x.png" },
    { title: "Game Design", image: "/images/holding controller@5x.png" },
    { title: "Birthday Parties", image: "/images/RoboThink Characters Together PNG.png" },
    { title: "Learning Center", image: "/images/teeter totter@5x.png" },
  ];

  return (
    <section id="programs" className="programs-section py-16 section-transition">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Nurturing Geniuses Around the World
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          RoboThink is a leading STEM, coding, robotics and engineering program 
          nurturing geniuses across 23 countries to thousands of students each day. 
          Our exciting themed STEM programs develop core STEM skills that students 
          apply to school subjects and their future careers.
        </p>
        <p className="mt-6 font-semibold">
          Check out our amazingly themed programs below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={program.image}
                alt={program.title}
                width={128}
                height={128}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-xl font-semibold mb-4">
            Enroll today and see the RoboThink Difference!
          </p>
          <a
            href="https://centralil.myrobothink.com/event"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-persianRed text-white font-semibold 
                       rounded-lg hover:bg-fireBush transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}