import { Container, Flex } from "@chakra-ui/react";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { Project } from "../components/Projects/Project";
import { Terminal } from "../components/Terminal/Terminal";
import { Connect } from "../components/Connect/Connect";
import { useEffect } from "react";
import axios from "axios";
export const LandingPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      if (!API_URL) {
        throw new Error("API URL IS NOT DEFINED IN ENVIRONMENT VARIABLE");
      }
      try {
        const response = await axios.get(API_URL);
        console.log(response.data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container
      maxW='100%'
      justifyContent={"center"}
      as={Flex}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Home />
      <About />
      <Skills />
      <Project />
      <Terminal />
      <Connect />
    </Container>
  );
};
