import * as React from "react";

import { ChakraProvider, Divider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TestimonialMain from "./components/Testimonials";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Helmet } from "react-helmet";
import { projects } from "./components/constants/constants";
// import Blog from "./components/Blog";

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);
const App = () => {
  const titles = projects.map((project) => project.title);

  return (
    <>
      <Helmet>
        {/* meta keywords */}
        <meta
          name="keywords"
          content={`portfolio, web developer, full stack developer, front end developer, back end developer, react developer, node developer, javascript developer, python developer, django developer, react developer, reactjs developer, react.js developer, react js developer, react native developer, reactnative developer, react-native developer, react native developer, react-native developer, react-native, ${titles?.join(
            ", "
          )}`}
        />
      </Helmet>
      <ChakraProvider>
        <Navbar />
        <Hero />
        <About />
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
    </>
  );
};
export default App;
