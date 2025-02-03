import Head from 'next/head';
import SignupForm from '../components/SignupForm';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';

export default function Home() {
  return (
    <>
      <Head>
        <title>RoboThink Central Illinois</title>
        <meta name="description" content="RoboThink Central Illinois offers fun and exciting Robotics, Engineering, and Coding programs where engineers, tinkerers, and builders of all ages can explore the exciting world of STEM!" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" />
      </Head>

      {/* Header */}
      <header className="bg-[#003366] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/">
            <img src="/images/logo.png" alt="RoboThink Logo" className="h-12 w-auto" />
          </a>
          {/* <h1 className="text-3xl font-bold tracking-wide">RoboThink Central Illinois</h1> */}
          <nav>
            <ul className="flex space-x-6 text-lg font-medium">
              <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#programs" className="hover:text-yellow-400 transition">Programs</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-10 rounded-md shadow-lg">
          <h2 className="text-5xl font-bold leading-tight">Welcome to RoboThink Central Illinois!</h2>
          <p className="text-xl mt-4 font-light">Inspiring young minds through Robotics, Engineering, and Coding.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#003366]">About Us</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          RoboThink Central Illinois offers fun and exciting Robotics, Engineering, and Coding programs where engineers, tinkerers, and builders of all ages can explore the exciting world of STEM!
        </p>
      </section>

      {/* Programs Section with Images */}
      <section id="programs" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-[#003366]">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-10 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <img src="/images/robotics.jpg" alt="Robotics Program" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-[#003366]">Robotics</h3>
              <p className="mt-4 text-gray-700">Dive into the world of robotics with hands-on projects that spark creativity and innovation.</p>
            </div>
            <div className="p-10 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <img src="/images/coding.jpg" alt="Coding Program" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-[#003366]">Coding</h3>
              <p className="mt-4 text-gray-700">Learn the fundamentals of coding through interactive and engaging lessons.</p>
            </div>
            <div className="p-10 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <img src="/images/engineering.jpg" alt="Engineering Program" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-[#003366]">Engineering</h3>
              <p className="mt-4 text-gray-700">Explore engineering concepts with fun and educational activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#003366] mb-10">What Parents Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-[#003366] mb-10">Follow Us on Instagram</h2>
        <InstagramFeed />
      </section>

      {/* Signup Form Section */}
      <section id="signup" className="py-16 container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#003366] mb-6">Join 0+ Kids Around the World</h2>
        <SignupForm />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-[#003366] mb-6">Contact Us</h2>
        <p className="text-lg">
          For inquiries, please email us at{' '}
          <a href="mailto:centralil@myrobothink.com" className="text-[#FF9900] font-semibold">centralil@myrobothink.com</a>{' '}
          or call{' '}
          <a href="tel:1-800-733-2863" className="text-[#FF9900] font-semibold">1-800-733-2863</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-6 text-center text-lg font-semibold">
        <p>&copy; {new Date().getFullYear()} RoboThink Central Illinois. All rights reserved.</p>
      </footer>
    </>
  );
}
