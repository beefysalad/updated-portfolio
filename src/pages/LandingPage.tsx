import { Container, Flex } from '@chakra-ui/react';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About';
import { Skills } from '../components/Skills/Skills';
import { Project } from '../components/Projects/Project';
import { Terminal } from '../components/Terminal/Terminal';
import { Connect } from '../components/Connect/Connect';

export const LandingPage = () => {
  return (
    <Container
      maxW='100%'
      justifyContent={'center'}
      as={Flex}
      flexDirection={'column'}
      alignItems={'center'}
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
