import React from "react";
import { ReactNode } from "react";
import {
  Text,
  Badge,
  Box,
  HStack,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  AvatarBadge,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontFamily="sans-serif"
            >
              Yash Kapure
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Link
                px={2}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Home
              </Link>
              <Link
                px={2}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#about"}
              >
                About
              </Link>
              <Link
                px={2}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#projects"}
              >
                Projects
              </Link>
              <Link
                px={2}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#blog"}
              >
                Blog
              </Link>
              <Link
                px={2}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#contact"}
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.githubusercontent.com/u/61585443?v=4"}
                    
                  >
                    <AvatarBadge boxSize='1.15em' bg='green.400' />
                  </Avatar>
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.githubusercontent.com/u/61585443?v=4"
                      }
                      
                    />
                  </Center>
                  <br />
                  <Center>
                    <Box>
                      <Text fontWeight="bold">
                        Yash Kapure
                        <Badge ml="1" colorScheme="green">
                          New
                        </Badge>
                      </Text>
                      <Text fontSize="sm"> Software Developer</Text>
                    </Box>
                  </Center>
                  <br />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#"
                onClick={isOpen ? onClose : onOpen}
              >
                Home
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#about"
                onClick={isOpen ? onClose : onOpen}
              >
                About
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#projects"
                onClick={isOpen ? onClose : onOpen}
              >
                Projects
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="blog"
                onClick={isOpen ? onClose : onOpen}
              >
                Blog
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="contact"
                onClick={isOpen ? onClose : onOpen}
              >
                Contact
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
      
    </>
  );
};

export default Navbar;
