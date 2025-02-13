import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import Programs from "../components/sections/Programs";
import PartnerCarousel from "../components/sections/PartnerCarousel";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Signup from "../components/sections/Signup";
import Instagram from "../components/sections/Instagram";
import Footer from "../components/Footer";
import { getPartnerLogos } from "../lib/fetchLogos";

export async function getStaticProps() {
  const logos = await getPartnerLogos(); // ✅ FIX: Use await to handle async function
  return { props: { logos } };
}

export default function Home({ logos }) {
  return (
    <>
      <Head>
        <title>RoboThink Central Illinois</title>
        <meta name="description" content="Join our STEM-based Robotics & Coding programs for kids!" />
      </Head>

      <Header />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <PartnerCarousel logos={logos} />
      <Signup />
      <Instagram />
      <Footer />
      <Analytics />
    </>
  );
}