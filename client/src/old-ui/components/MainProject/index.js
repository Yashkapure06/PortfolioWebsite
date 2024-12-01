import {
  Text,
  useColorModeValue,
  Center,
  Button,
  Stack,
  Image,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const MainProject = () => {
  return (
    <div>
      <Center id="projects" py={4}>
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
          My Main Project
        </Text>
      </Center>

      <Center py={2}>
        <Image
          style={{
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
          }}
          padding={{
            base: 2,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 10,
          }}
          margin={{
            base: 2,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 10,
          }}
          width={{
            base: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
          }}
          src={"/images/final-year.png"}
          alt={"Online Interview Assessment"}
        />
      </Center>
      {/* add button */}
      {/* <Center py={2}> */}
      <Text
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: 25,
          marginTop: "20px",
        }}
      >
        Online Interview Assessment System for Students and Professionals
      </Text>

      <Text
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Tech Stack Used
      </Text>
      <Text
        display={"flex"}
        flexWrap={{
          md: "wrap",
          sm: "wrap",
          base: "wrap",
        }}
        justifyContent={"center"}
      >
        {[
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
          "Firebase",
          "Google OAuth",
        ].map((tag, index) => (
          <Text
            key={index}
            style={{
              fontWeight: "600",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tag
              style={{
                borderRadius: "10px",
                color: "white",
                padding: "5px",
                margin: "5px",
                fontSize: "15px",
              }}
              bgGradient={"linear(to-r, #7928CA, #FF0080)"}
            >
              {tag}
            </Tag>
          </Text>
        ))}
      </Text>

      <Text style={{ textAlign: "center", marginBottom: "20px", fontSize: 20 }}>
        Do you want to learn more about this{" "}
        <strong>
          <em>PRODUCT</em>
        </strong>
        ?
      </Text>
      <Stack
        mt={"1rem"}
        mb={"1rem"}
        direction={"row"}
        padding={1}
        alignItems={"center"}
        justifyContent={"center"}
        flex={1}
      >
        <Button
          rounded={"full"}
          bg={{
            base: "blue.400",
            md: "blue.400",
          }}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bgGradient: "linear(to-r, #7928CA, #FF0080)",
          }}
          _focus={{
            bg: "blue.500",
          }}
          padding={{ base: 2 }}
          margin={{ base: 2, md: 4 }}
          //   onclick hfref #contact
          whiteSpace={"wrap"}
          onClick={() => {
            window.open(
              "https://calendly.com/yashkapure06/book-a-call-at-the-earliest?month=2024-10",
              "_blank"
            );
          }}
          fontSize={"sm"}
          w={{ base: "100%", md: "50%" }}
        >
          Book A Call
        </Button>
      </Stack>
      {/* </Center> */}
    </div>
  );
};

export default MainProject;
