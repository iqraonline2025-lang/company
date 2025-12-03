import React from "react";
import AboutHero from "../components/AboutHero";
import Navbar from "../components/Navbar";
import WhoWeAreMission from "../components/WhoWeAreMission";
import SkillsTools from "../components/SkillsTools";
import QuranPhilosophy from "../components/QuranPhilosphy";
import FounderSection from "../components/FounderSection";
import QuranPhilosophyRoundCards from "../components/QuranPhilosphyRoundCards";
import BusinessMilestones from "../components/BusinessMileStones";
import Footer from "../components/Footer";
import AboutOryntix from "../components/AboutOryntix";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <WhoWeAreMission />
      <SkillsTools />
      <QuranPhilosophy />
      <FounderSection />
      <QuranPhilosophyRoundCards />
      <BusinessMilestones />
      <AboutOryntix />
      <Footer />
    </>
  );
};

export default About;
