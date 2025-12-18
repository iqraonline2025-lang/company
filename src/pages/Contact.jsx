import React from "react";
import ContactHeroSection from "../components/ContactHeroSection";
import ContactInfoCards from "../components/ContactInfoCards";
import ContactForm from "../components/ContactForm";
import GoogleMapSection from "../components/GoogleMapSection";
import OfficeHoursAndFAQ from "../components/OfficeHoursAndFAQ";
import PrimaryContactDetails from "../components/PrimaryContactDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHeroSection />
      <ContactInfoCards />
      <ContactForm />
      <GoogleMapSection />
      <OfficeHoursAndFAQ />
      <PrimaryContactDetails />
      <Footer />
    </>
  );
};

export default Contact;
