import {
  Box,
  Code,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import logo from "../../assets/newpic.png";
import TypeWriter from "typewriter-effect";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
export const Home = () => {
  const bg = useColorModeValue("rgb(9,24,47)", "gray.50");
  const color = useColorModeValue("black", "#64ffda");

  const ref = useRef(null);

  const inView = useInView(ref);

  return (
    <Box w={{ base: "100%", md: "100%" }} color={bg} id='home'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }} // Animation duration
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-evenly" }}
          alignItems={"center"}
        >
          <Image src={logo} boxSize={{ base: "50%", md: "25%" }} />

          <Box maxW={{ base: "70%", md: "30%" }}>
            <VStack style={{ alignItems: "flex-start" }} spacing={2}>
              <Heading size={"xl"} textAlign={"center"}>
                <TypeWriter
                  options={{
                    strings: [
                      "John Patrick Ryan Mandal",
                      "Patrick",
                      "Ryan",
                      "JP",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Heading>
              <Spacer />
              <Box
                w='100%'
                display={"flex"}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                <Code
                  textAlign={"center"}
                  color={color}
                  fontSize={{ base: "lg", md: "xl" }}
                >
                  Software Engineer
                </Code>
              </Box>

              <Spacer />
              <Text textAlign={"justify"}>
                a passionate software engineer with a strong interest in
                developing top-notch solutions for real-world problems.
              </Text>

              <HStack
                w='100%'
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/john-patrick-ryan-mandal-407bb8270/'
                  rel='noreferrer'
                >
                  <Icon
                    cursor={"pointer"}
                    _hover={{ transform: "translateY(-5px)" }}
                    transition='transform 0.3s'
                    color={color}
                    boxSize={8}
                    as={FaLinkedin}
                  />
                </a>
                <a
                  target='_blank'
                  href='https://github.com/beefysalad'
                  rel='noreferrer'
                >
                  <Icon
                    cursor={"pointer"}
                    _hover={{ transform: "translateY(-7px)" }}
                    transition='transform 0.3s'
                    color={color}
                    boxSize={8}
                    as={FaGithub}
                  />
                </a>
                <a
                  target='_blank'
                  href='https://www.facebook.com/Jpatrickzxc/'
                  rel='noreferrer'
                >
                  {" "}
                  <Icon
                    cursor={"pointer"}
                    _hover={{ transform: "translateY(-9px)" }}
                    transition='transform 0.3s'
                    color={color}
                    boxSize={8}
                    as={FaFacebook}
                  />
                </a>
              </HStack>
            </VStack>
            <Spacer />
          </Box>
        </Stack>
      </motion.div>
      <Flex justifyContent={"center"} mt='15vh'>
        <Divider w='70%' />
      </Flex>
    </Box>
  );
};
