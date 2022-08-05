import React from "react";
import { useDispatch } from "react-redux";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  SimpleGrid,
  Text,
  Container,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { projects } from "../constants/constants";

import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const Projects = ({ post, _id }) => {
  const TagList = styled.ul`
    display: flex;
    padding-left: 10px;
  `;
  const Tag = styled.li`
    padding-left: 12px;
    letter-spacing: 0.1rem;
    list-style: none;
    font-size: 0.7rem;
  `;
  const TitleContent = styled.div`
    text-align: center;
    padding: 0.7rem 10px 0 0.7rem;
    margin: 0 15px 0 15px;
    padding-right: 50%;
    width: 100%;
  `;
  const Hr = styled.hr`
    width: 75px;
    height: 4px;
    margin: 20px auto;
    border: 0;
    background: #ff0080;
  `;
  const dispatch = useDispatch();
  return (
    <>
      <Divider />

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
          My Projects
        </Text>
      </Center>
      <Center py={2}>
        <Heading style={{ paddingLeft: 30 }}>
          Here are some of My Projects
        </Heading>
      </Center>
      <Hr />
      <Center py={2}>
        <Text
          Text
          color={useColorModeValue("black", "white")}
          fontSize={20}
          style={{ textAlign: "center", padding: " 0 0.5em 0 0.5em " }}
        >
          <i>
            “Learning to write programs stretches your mind, and helps you think
            better, creates a way of thinking about things that I think is
            helpful in all domains.”
          </i>
        </Text>
      </Center>
      <Center>
        <i style={{ textAlign: "center" }}>
          —Bill Gates, Co-Chairman, Bill & Melinda Gates Foundation, Co-Founder,
          Microsoft
        </i>
      </Center>
      <Hr />
      <Container id="about" maxW={"6xl"} py={12} isLazy>
        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}> */}
        <Center py={6}>
          <div className="main">
            {projects.map(
              ({ id, image, title, description, tags, source, visit, likeCount }) => (
                <div className="card">
                  <img src={image} alt={title} />
                  <div className="card-body">
                    <h6>{title}</h6>
                    <p>{description}</p>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {tags.map((tag, index) => (
                        <center>
                          
                          <Tag key={index}>{tag}</Tag>
                        </center>
                      ))}
                    </TagList>
                    <div>
                      <Stack
                        width={"100%"}
                        mt={"1rem"}
                        direction={"row"}
                        padding={1}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Button
                          flex={1}
                          fontSize={"sm"}
                          rounded={"full"}
                          _focus={{
                            bg: "gray.200",
                          }}
                          onClick={() => {
                            window.open(visit, "_blank");
                          }}
                        >
                          Visit
                        </Button>
                        <Button
                          flex={1}
                          fontSize={"sm"}
                          rounded={"full"}
                          bg={"black"}
                          color={"white"}
                          boxShadow={
                            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                          }
                          _hover={{
                            bgGradient: "linear(to-r, #7928CA, #FF0080)",
                          }}
                          // _focus={{
                          //   bg: "blue.500",
                          // }}
                          onClick={() => {
                            window.open(source, "_blank");
                          }}
                        >
                          {<BsGithub size="28px" />}
                        </Button>
                        
                      </Stack>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </Center>
      </Container>
    </>
  );
};

export default Projects;
