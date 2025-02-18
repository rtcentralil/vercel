export default function About() {
  return (
    <section id="about" className="about-section py-16 section-transition">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          RoboThink is a leading STEM, coding, robotics and engineering program nurturing geniuses across 23 countries to thousands of students each day. Our exciting themed STEM programs develops core STEM skills that students apply to school subjects and their future careers.
        </p>
        <div className="mt-8">
          <a
            href="https://www.myrobothink.com/about/our-story/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-fireBush text-black font-semibold rounded-lg hover:bg-persianRed transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}