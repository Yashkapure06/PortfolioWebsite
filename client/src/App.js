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
import MainProject from "./components/MainProject";

const App = () => {
  const titles = projects.map((project) => project.title);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "CreativeWork",
        name: "Online Interview Assessment System",
        description:
          "A fully Functional Online Interview Assessment System for Students and Professionals.",
        url: "https://calendly.com/yashkapure06/book-a-call-at-the-earliest?month=2024-10",
        thumbnailUrl: "/images/final-year.png",
        keywords: [
          "React.js",
          "Tailwind CSS",
          "React.js",
          "Node.js",
          "Socket.io",
          "MongoDB",
          "Heroku",
          "Git",
          "Node Mailer",
          "Express.js",
        ],
      },
      {
        "@type": "CreativeWork",
        name: "The Kolorado Paints",
        description:
          "A fully Functional Next.js Based Frontend along with MERN Dashboard. Artistic Content.",
        url: "https://thekoloradopaints.com/",
        thumbnailUrl: "/images/15.png",
        keywords: ["Next.js", "CSS3", "React.js", "MUI", "SEO"],
      },
      {
        "@type": "CreativeWork",
        name: "TechnoKraft",
        description:
          "A fully Functional Next.js Based Frontend for Educational Content Provider.",
        url: "https://tts.net.in/",
        thumbnailUrl: "/images/13.png",
        keywords: ["Next.js", "CSS3", "React.js", "MUI", "SEO"],
      },
      {
        "@type": "CreativeWork",
        name: "BEST GST Course",
        description:
          "A GST Course Selling website with Easebuzz Payment Gateway Integration.",
        url: "https://www.bestgstcourse.com/",
        thumbnailUrl: "/images/16.png",
        keywords: [
          "Payment Gateway",
          "Next.js",
          "Tailwind CSS",
          "React.js",
          "MUI",
          "SEO",
        ],
      },
      {
        "@type": "CreativeWork",
        name: "Affinix Digital",
        description:
          "A fully Functional Next.js Based Frontend for Best Digital Marketing Agency.",
        url: "https://affinixdigital.com/",
        thumbnailUrl: "/images/12.png",
        keywords: ["Next.js", "Tailwind CSS", "React.js", "MUI", "SEO"],
      },
      {
        "@type": "CreativeWork",
        name: "Octane Apps",
        description:
          "A fully Functional Next.js Based Frontend with MERN Dashboard.",
        url: "https://octaneapps.com/",
        thumbnailUrl: "/images/14.png",
        keywords: ["Next.js", "SCSS", "CSS", "React.js", "MUI", "SEO"],
      },
      {
        "@type": "CreativeWork",
        name: "Dr. Manisha's Yoga Institute",
        description:
          "MEVN Stack Web Application with Admin Panel and Blogging System.",
        url: "https://www.drmanishasyogainstitute.com/",
        thumbnailUrl: "/images/main.png",
        keywords: [
          "Vue.js",
          "Tailwind CSS",
          "Vuex",
          "MongoDB",
          "Node-Express",
          "Firebase",
          "SEO",
        ],
      },
      {
        "@type": "CreativeWork",
        name: "Anandlok Ayurveda",
        description:
          "Intern project built with ReactJs, Next.js, and Material-UI for Ayurveda practitioners.",
        url: "https://www.anandlokayurveda.com/",
        thumbnailUrl: "/images/1.png",
        keywords: ["Next.js", "React.Js", "CSS", "Material-UI"],
      },
      {
        "@type": "CreativeWork",
        name: "News-o-Pedia",
        description:
          "Vue.js-based news app using NewsAPI for fetching global news.",
        url: "https://news-o-pedia.netlify.app/",
        thumbnailUrl: "/images/news-o-pedia.png",
        keywords: ["Vue.js", "CSS", "NewsAPI.org"],
      },
      {
        "@type": "CreativeWork",
        name: "Select Text to Speech Chrome Extension",
        description:
          "A Chrome extension to read aloud selected text using JavaScript.",
        url: "https://github.com/Yashkapure06/TextToSpeech-ChromeExtension",
        thumbnailUrl: "/images/text-to-sppech.webp",
        keywords: ["JavaScript"],
      },
      {
        "@type": "CreativeWork",
        name: "Restro - A Restaurant Website",
        description:
          "A simple restaurant website built with HTML, CSS, JS, and API integration.",
        url: "https://fynd-academy-mevn.vercel.app/",
        thumbnailUrl: "/images/restro.png",
        keywords: ["HTML", "CSS", "Javascript", "API"],
      },
      {
        "@type": "CreativeWork",
        name: "OpenSource Contribution in Chakra-UI",
        description:
          "A portfolio website showcasing open-source contributions to Chakra-UI.",
        url: "https://chakra-ui.com/community/showcase",
        thumbnailUrl: "/images/9.png",
        keywords: ["Chakra-UI", "React.Js", "CSS"],
      },
      {
        "@type": "CreativeWork",
        name: "Netflix Clone",
        description:
          "A Netflix clone created using ReactJs and Sass, with API integration.",
        url: "https://netflix-clone-06.netlify.app/",
        thumbnailUrl: "/images/10.png",
        keywords: ["React JS", "SCSS", "CSS", "API"],
      },
      {
        "@type": "CreativeWork",
        name: "YouTube Clone",
        description:
          "A YouTube clone built using ReactJs, Material-UI, and YouTube v3 API.",
        url: "https://youtube-clone-06.netlify.app/",
        thumbnailUrl: "/images/11.png",
        keywords: ["ReactJs", "CSS", "Material-UI", "API"],
      },
      {
        "@type": "CreativeWork",
        name: "Blogging Website",
        description:
          "A blogging platform created with NodeJs, Express, and MongoDB.",
        url: "https://github.com/Yashkapure06/Blogging-Website",
        thumbnailUrl: "/images/7.png",
        keywords: ["Nodejs", "Express", "CSS", "MongoDB"],
      },
      {
        "@type": "CreativeWork",
        name: "Personal Portfolio",
        description:
          "A personal portfolio website built with NextJS and MaterialUI.",
        url: "https://yash-kapure.vercel.app/",
        thumbnailUrl: "/images/8.png",
        keywords: ["NextJs", "MaterialUI"],
      },
      {
        "@type": "CreativeWork",
        name: "Space Talks ✨",
        description:
          "A MERN website for people to share their love and knowledge about space.",
        url: "https://space-talks.netlify.app/",
        thumbnailUrl: "/images/spacetalks.png",
        keywords: ["ReactJs", "Material-UI", "Three.Js", "MongoDB"],
      },
      {
        "@type": "CreativeWork",
        name: "Personal Portfolio (React)",
        description:
          "A ReactJS portfolio website with dark & light mode features.",
        url: "https://yashkapure-portfolio.web.app/",
        thumbnailUrl: "/images/4.png",
        keywords: ["React", "CSS3", "JavaScript"],
      },
      {
        "@type": "CreativeWork",
        name: "Movie WebApp",
        description:
          "A simple movie app created with ReactJs for learning purposes.",
        url: "https://react-movie-app-yash.netlify.app/",
        thumbnailUrl: "/images/6.png",
        keywords: ["React", "CSS3", "JavaScript", "API"],
      },
      {
        "@type": "CreativeWork",
        name: "Complete React Website",
        description:
          "A demo website built entirely with ReactJs, HTML, and CSS.",
        url: "https://reactwebsite-3b247.web.app/",
        thumbnailUrl: "/images/3.png",
        keywords: ["React", "CSS3"],
      },
      {
        "@type": "CreativeWork",
        name: "Wedding Invitation Website",
        description:
          "A wedding invitation website with animations built using HTML, CSS, and JS.",
        url: "https://harshal-nandani.web.app/",
        thumbnailUrl: "/images/5.png",
        keywords: ["HTML", "CSS", "JS"],
      },
    ],
  };
  return (
    <>
      <Helmet>
        {/* meta keywords */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

        <meta
          name="keywords"
          content={`Online Interview Assessment System for Students and Professionals, portfolio, web developer, full stack developer, front end developer, back end developer, react developer, node developer, javascript developer, python developer, django developer, react developer, reactjs developer, react.js developer, react js developer, react native developer, reactnative developer, react-native developer, react native developer, react-native developer, react-native, Book A Call with Yash Kapure ${titles?.join(
            ", "
          )}`}
        />
      </Helmet>
      <ChakraProvider>
        <Navbar />
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
    </>
  );
};
export default App;
