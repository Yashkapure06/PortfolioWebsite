import * as React from 'react'

import { ChakraProvider, Divider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import TestimonialMain from './components/Testimonials';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

const App=() =>{
    
  return (
      <ChakraProvider>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Divider/>
        <Blog/>
        <Divider/>
        <TestimonialMain/>
        <Divider/>
        <Contact/>
        <Footer/>
    </ChakraProvider>
  )
};
export default App;