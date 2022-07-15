import React from "react";
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

import { BsGithub } from 'react-icons/bs';
const Projects = () => {
  return (
    <>
    <Divider/>
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

      <Heading style={{alignItems: "justify"}}>Here are some of My Projects</Heading>
      </Center>
    <Container id="about" maxW={"6xl"} py={12} isLazy>
        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}> */}
    <Center py={6}>
        
      
      <div className="main">
        {projects.map(({id, image, title, description, tags, source, visit })=>(
        <div className="card">
          <img
            src={image}
            alt={title}
          />
          <div className="card-body">
            <h6>{title}</h6>
            <p>
            {description}
              </p>
            <div>
            <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              onClick={() => {
                window.open(visit, '_blank');
              }}
              >
              Visit
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'black'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onClick={() => {
                window.open(source, '_blank');
              }}>
              {<BsGithub size="28px" />}
            </Button>
          </Stack>
            </div>
          </div>
        </div>
      ))}
        
      </div>
    </Center>
    {/* </SimpleGrid> */}
    </Container>
    </>
  );
};

export default Projects;
