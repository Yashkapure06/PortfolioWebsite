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
import LiveCount from './components/LiveCount';
// import Comments from './components/Comments';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// const countEl = document.getElementById('count');

// updateVisitCount();
// function updateVisitCount(){
  
  
//   fetch('https://api.countapi.xyz/update/yashkapure.netlify.app/test?amount=1')
//     .then(res => res.json())
//     .then(res => {
//       countEl.innerHTML = res.value;
//     })
// }
window.addEventListener("scroll", reveal);
const App=() =>{
    
  return (
      <ChakraProvider>
        <Navbar/>
        <Hero/>
        <About />
        <Projects/>
        {/* <Comments/> */}
        <Divider/>
        <Blog/>
        <Divider/>
        <TestimonialMain/>
        <Divider/>
        <Contact/>
        {/* <LiveCount/> */}
        <Footer/> 
    </ChakraProvider>
  )
};
export default App;