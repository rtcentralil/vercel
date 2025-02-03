import Head from 'next/head'
import Testimonials from '../components/Testimonials'
import InstagramFeed from '../components/InstagramFeed'
import SignupForm from '../components/SignupForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Centralil Franchise</title>
        <meta name="description" content="Exact copy of the Centralil franchise page" />
      </Head>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Centralil Franchise</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="container mx-auto h-full flex items-center justify-center">
          <h2 className="text-4xl text-white font-bold bg-black bg-opacity-50 p-4">
            Welcome to Centralil Franchise
          </h2>
        </div>
      </section>

      {/* About Section (Exact Copy Content) */}
      <section id="about" className="py-12 container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Centralil</h2>
        <p className="text-lg leading-relaxed">
          Centralil is the flagship franchise offering innovative solutions for your business needs. Our dedication to excellence and a strong community focus have set us apart in the industry. We strive to provide exceptional service and create lasting relationships with our partners.
        </p>
      </section>

      {/* Services Section (Exact Copy Content) */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Service One</h3>
              <p className="text-gray-700">
                Our expertise in digital transformation ensures that every client receives a tailored solution that meets their unique needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Service Two</h3>
              <p className="text-gray-700">
                We provide comprehensive support services that empower you to focus on your core business.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Service Three</h3>
              <p className="text-gray-700">
                Our advanced analytics and strategic guidance drive sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Signup Form Section */}
      <SignupForm />

      {/* Contact Section */}
      <section id="contact" className="py-12 container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">
          For inquiries, please email us at <a href="mailto:info@centralil.com" className="text-blue-500">info@centralil.com</a> or call +1 234 567 890.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Centralil Franchise. All rights reserved.
        </div>
      </footer>
    </>
  )
}
