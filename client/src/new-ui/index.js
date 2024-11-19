import React from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
const NewUI = ({ handleToggleUI }) => {
  return (
    <main className="overflow-hidden">
      <Header handleToggleUI={handleToggleUI} />
      <Hero />
      <Features />
      {/* <Pricing /> */}
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default NewUI;
