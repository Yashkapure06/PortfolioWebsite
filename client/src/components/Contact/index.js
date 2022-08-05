import React from 'react';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson, BsInstagram, BsLinkedin } from 'react-icons/bs';

  

const Contact = () => {

  const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            style={{textDecoration:'none'}}
            _hover={{textDecoration:'none'}}         
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
          <Button mt={4}
                        variant="solid"
                        bg="#0D74FF"
                        color="white"
                        _hover={{bgGradient:'linear(to-l, #7928CA, #FF0080)'}} >
                            {label}
                          </Button>
        </Link>
    );
  };
    return (
       <Container id="contact" bgGradient='linear(to-l, #7928CA, #FF0080)'  maxW="full" mt={0} centerContent overflow="hidden" isLazy>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-7028073007
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="225px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        yashkapure06@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Maharashtra, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{bgGradient:'linear(to-l, #7928CA, #FF0080)'  }}
                      icon={<BsInstagram size="28px" />}
                      onClick={() => {
                        window.open("https://www.instagram.com/_yashkapure_/", "_blank");
                      }}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)'  }}
                      icon={<BsGithub size="28px" />}
                      onClick={() => {
                        window.open("https://github.com/Yashkapure06", "_blank");
                      }}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)'  }}
                      icon={<BsLinkedin size="28px" />}
                      onClick={() => {
                        window.open("https://www.linkedin.com/in/yash-kapure-9090a01a9/", "_blank");
                      }}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box  bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={3}>
                      <form action="mailto:yashkapure06@gmail.com" method="post">
                        <center>
                      
                      <FormControl id="name" float="right">
                        
                        <ButtonMailto
                        
                        label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />
                      </FormControl>
                      </center>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    );
}

export default Contact;
