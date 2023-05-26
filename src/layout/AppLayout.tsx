import { Container, Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

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
        px={{ base: '4', md: '5', lg: '10' }}
        py={{ base: '2', md: '3' }}
        minH='100vh'
      >
        <Flex
          pt='250'
          px='100'
          flexDirection='column'
          w='full'
          h='full'
          flexGrow='1'
        >
          {children}
        </Flex>
        <Footer />
      </Container>
    </>
  );
};

export default AppLayout;
