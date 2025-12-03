import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesGrid from "../components/Services";
import FeaturedSlider from "../components/FeaturedSlider";
import SkillFlow from "../components/SkillFlow";
import ProcessSection from "../components/ProcessSection";
import AboutUs from "../components/AboutUs";
import QuranTeaching from "../components/QuranTeaching";
import TestimonialsSlider from "../components/TestimonialsSlider";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Second from "../components/Second";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedSlider />
      <ServicesGrid />
      <SkillFlow />
      <ProcessSection />
      <QuranTeaching />
      <AboutUs />
      <TestimonialsSlider />
      <Second />
      <FAQs />

      <Footer />
    </>
  );
};

export default Home;
