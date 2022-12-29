import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiHeroku, SiGit, SiJava } from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoGithub,
  IoLogoCss3,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={12}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
    </Stack>
  );
};

const About = () => {
  return (
    <Container className="reveal" id="about" maxW={"5xl"} py={12} isLazy>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About Me
          </Text>
          <Heading>
            <Text>Hello! My name is Yash Kapure</Text>
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            I am a self-taught programmer with a passion for learning and
            exploring new technologies. I have a strong background in full-stack
            development and am always eager to expand my skillset and take on
            new challenges. In my free time, I enjoy sipping on a cup of tea (or
            coffee) and watching a game of cricket. As a dedicated and driven
            individual, I am constantly seeking out opportunities to grow and
            improve as a programmer.
          </Text>
          <Text color={"gray.500"} fontSize={"md"}>
            Some of the Stack I know
          </Text>
          <Stack spacing={8} direction={"row"}>
            <Feature
              icon={
                <Icon
                  as={IoLogoReact}
                  color={useColorModeValue("blue.200", "blue.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoPython}
                  color={useColorModeValue("blue.200", "blue.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoNodejs}
                  color={useColorModeValue("green.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "green.900")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoJavascript}
                  color={useColorModeValue("yellow.300", "yellow.400")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />

            <Feature
              icon={
                <Icon
                  as={TbBrandNextjs}
                  color={useColorModeValue("white", "black")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiMongodb}
                  color={useColorModeValue("green.500", "green.300")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
          </Stack>
          <Stack spacing={8} direction={"row"}>
            <Feature
              icon={
                <Icon
                  as={IoLogoHtml5}
                  color={useColorModeValue("red.300", "red.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiExpress}
                  color={useColorModeValue("white", "blue.600")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoGithub}
                  color={useColorModeValue("white", "blue.700")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiHeroku}
                  color={useColorModeValue("white", "blue.700")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiGit}
                  color={useColorModeValue("red", "red.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoCss3}
                  color={useColorModeValue("blue.200", "blue.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
          </Stack>
          <Stack spacing={8} direction={"row"}>
            <Feature
              icon={
                <Icon
                  as={SiJava}
                  color={useColorModeValue("white", "red.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            width={"100%"}
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://spectrum.ieee.org/media-library/image.jpg?id=25587918"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default About;
