import { Container, Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { ParticleBackground } from '../config/ParticleBackground';

interface AppLayoutProps {
  children?: React.ReactNode;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <Container
        as={Flex}
        gap='5'
        flexDirection='column'
        justifyContent='start'
        alignItems='center'
        maxW='container.2xl'
        minH='100vh'
        px={{ base: '4', md: '0' }}
        py={{ base: '2', md: '0' }}
      >
        <Flex
          pt='200'
          // px={{ base: '3', md: '5', lg: '8' }}
          flexDirection='column'
          w='full'
          h='full'
          flexGrow='1'
        >
          <ParticleBackground />
          {children}
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default AppLayout;
