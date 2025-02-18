// pages/index.js
import { useEffect } from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import Testimonials from "../components/sections/Testimonials";
import AnimatedCounter from "../components/sections/AnimatedCounter";
import PartnerCarousel from "../components/sections/PartnerCarousel";
import Signup from "../components/sections/Signup";
import Instagram from "../components/sections/Instagram";
import Footer from "../components/Footer";
import { getPartnerLogos } from "../lib/fetchLogos";

export async function getStaticProps() {
  const logos = await getPartnerLogos();
  return { props: { logos } };
}

export default function Home({ logos }) {
  useEffect(() => {
    // If there's a hash in the URL, scroll to that section once the component mounts
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // remove the '#' from the hash
      const element = document.getElementById(id);
      if (element) {
        // Use a timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>RoboThink Central Illinois</title>
        <meta name="description" content="Join our STEM-based Robotics & Coding programs for kids!" />
      </Head>
      <SEO 
        title="RoboThink Central Illinois | Home" 
        description="Join our STEM-based Robotics & Coding programs for kids!"
        canonical="https://www.robothinkcil.com/"
        keywords="STEM, Robotics, Coding, Workshops"
      />
      <Header />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <AnimatedCounter />
      <PartnerCarousel logos={logos} />
      <Signup />
      <Instagram />
      <Footer />
      <Analytics />
    </>
  );
}