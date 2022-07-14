import * as React from 'react'

import { ChakraProvider, Text, Badge, Flex, Avatar, Box } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App=() =>{
    
  return (
      <ChakraProvider>
        <Navbar/>
        <Hero/>
    </ChakraProvider>
  )
};
export default App;