import React from "react";
import QuranHero from "../components/QuranHero";
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import CoursesSection from "../components/CoursesSection";
import TeachingMethod from "../components/TeachingMethod";
import PackagesSection from "../components/PackageSection";
import TestimonialsSection from "../components/TestimonialSection";
import ContactFormSection from "../components/ContactFormSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const QuranTeach = () => {
  return (
    <>
      <Navbar />
      <QuranHero />
      <FeaturesSection />
      <CoursesSection />
      <TeachingMethod />
      <PackagesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default QuranTeach;
