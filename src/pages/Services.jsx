import React from "react";
import Navbar from "../components/Navbar";
import HeroServices from "../components/HeroServices";
import WebDevelopment from "../components/WebDevelopment";
import UIDesign from "../components/UIDesign";
import SEOOptimization from "../components/SEOOptimization";
import WebsiteMaintenance from "../components/WebsiteMaintenance";
import Branding from "../components/Branding";
import QuranTeachingServices from "../components/QuranTeachingServices";
import PricingSection from "../components/PricingSection";
import CTAServices from "../components/CTAServices";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navbar />
      <HeroServices />

      <WebsiteMaintenance />
      <WebDevelopment />

      {/* Design Services */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Design Services
          </h2>
          <UIDesign />
        </div>
      </div>

      {/* Marketing Services */}
      <SEOOptimization />
      <Branding />

      {/* Education Services */}
      <QuranTeachingServices />

      <PricingSection />
      <Footer />
    </div>
  );
};

export default Services;
