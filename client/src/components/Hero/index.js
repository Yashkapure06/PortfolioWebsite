import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  // IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Highlight,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  // Tabs,
  // TabList,
  // Tab,
  // TabPanels,
  // TabPanel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import heroImage from "./image/DSC_0094.JPG";
import resume from "./image/resume.png";

const Hero = () => {
  return (
    <>
      <Container maxW={"7xl"} isLazy>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              fontFamily={"sans-serif"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "20%",
                  position: "absolute",
                  bottom: 2,
                  left: 0,
                  bg: "pink.400",
                  zIndex: -1,
                }}
              >
                Welcome to my
              </Text>
              <br />
              <Text
                as={"span"}
                color={"pink.400"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                Portfolio!
              </Text>
            </Heading>
            <Text>
              {" "}
              Total visits : <span id="visits"></span>
            </Text>
            <Text color={"gray.400"}>
              As a full-stack web developer, I have a strong foundation in a
              range of technologies. My expertise spans from front-end
              development to back-end programming.
              <Highlight
                query="MERN / MEVN"
                styles={{
                  px: "2",
                  py: "0.3",
                  rounded: "full",
                  bg: "green.100",
                }}
              >
                One of my favorite technologies to work with is React.js,
                particularly within the MERN / MEVN stack.
              </Highlight>
              <br />
              <Highlight
                query="React Native 📱"
                styles={{ px: "2", py: "0.3", rounded: "full", bg: "blue.100" }}
              >
                I am currently expanding my skillset to include React Native 📱
                for mobile development.
              </Highlight>
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                _hover={{ bgGradient: "linear(to-r, #7928CA, #FF0080)" }}
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Hire me
              </Button>

              <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                  <Button
                    rounded={"full"}
                    rightIcon={<ChevronDownIcon />}
                    size={"lg"}
                    colorScheme={"red"}
                    fontWeight={"normal"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    _hover={{ bgGradient: "linear(to-r, #7928CA, #FF0080)" }}
                    w="fit-content"
                  >
                    My Resume
                  </Button>
                </PopoverTrigger>
                <PopoverContent _focus={{ boxShadown: "#f4f4" }} ml={5}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight="bold">
                    My Resume(Click on image to open)
                  </PopoverHeader>
                  <PopoverBody>
                    <Image
                      alt={"Hero Image"}
                      fit={"cover"}
                      align={"center"}
                      w={"100%"}
                      h={"100%"}
                      src={resume}
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/1zHvvBxF-plAmr-J6ZFCl73LF68fnteEt/view?usp=sharing",
                          "_blank"
                        );
                      }}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              {/* </Button> */}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={"190%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Box
              position={"relative"}
              height={"350px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={heroImage}
              />
              
            </Box>
          </Flex>
        </Stack>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
          align="center" // Align the text and icons horizontally
        >
          <Text fontSize={{ base: "3xl", sm: "2xl", lg: "3xl" }}>Connect with me :</Text>
          <a href="https://github.com/Yashkapure06" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://linkedin.com/in/yash-kapure" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/_yashkapure" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://twitter.com/KapureYash" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          
        </Stack>

      </Container>
    </>
  );
};

export default Hero;

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="blob"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="#FF0080"
      />
    </Icon>
  );
};
