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
  import Comments from '../Comments/index';
  

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
       <Container className="reveal" id="contact" bgGradient='linear(to-l, #7928CA, #FF0080)'  maxW="full" mt={0} centerContent overflow="hidden" isLazy>
      <Flex
      >
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          p={{ sm: 5, md: 5, lg: 6 }}
          m={{ sm: 4, md: 16, lg: 25 }}
          width="100%"
          >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 8, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        <Link href="tel:7028073007">+91-7028073007</Link>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="255px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                       <Link href="mailto:yashkapure06@gmail.com"> yashkapure06@gmail.com</Link>
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
            </Wrap>
          </Box>
        </Box>
      </Flex>
              {/* <Comments /> */}
    </Container>
    );
}

export default Contact;
