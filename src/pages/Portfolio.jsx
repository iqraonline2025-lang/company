import React from "react";
import PortHero from "../components/PortHero";
import Navbar from "../components/Navbar";
import WorkGrid from "../components/WorkGrid";
import SingleBGSection from "../components/SingleBGSection";
import Testimonials from "../components/Testimonials";
import ImageShowcase from "../components/ImagesShowCase";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectSection";
import StatsCounter from "../components/StatsCounter";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <PortHero />
      <WorkGrid />
      <SingleBGSection />
      <Testimonials />
      <ImageShowcase />
      <ProjectsSection />
      <StatsCounter />
      <Footer />
    </>
  );
};

export default Portfolio;
