import React from "react";
import { ChakraProvider, Divider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TestimonialMain from "./components/Testimonials";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import MainProject from "./components/MainProject";
const OldUI = ({ handleToggleUI }) => {
  return (
    <div>
      <ChakraProvider>
        <Navbar handleToggleUI={handleToggleUI} />
        <Hero />
        <About />
        <Divider />
        <MainProject />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        {/* <Blog /> */}
        <Divider />
        <TestimonialMain />
        <Divider />
        <Contact />
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default OldUI;
