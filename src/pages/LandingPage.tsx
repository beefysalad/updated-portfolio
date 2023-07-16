import {
  Badge,
  Box,
  Button,
  Code,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import logo from '../assets/bg-pic.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import TypeWriter from 'typewriter-effect';

export const LandingPage = () => {
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  const color = useColorModeValue('black', '#64ffda');

  return (
    <Container maxW='100%'>
      <Box maxH='100%' color={bg} id='home'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-evenly' }}
          alignItems={'center'}
        >
          <Box maxW={{ base: '30%', md: '70%' }}></Box>
          <Image src={logo} boxSize={{ base: '150%', md: '25%' }} />
          <Box maxW={{ base: '70%', md: '30%' }}>
            <VStack style={{ alignItems: 'flex-start' }} spacing={2}>
              <Heading size={'xl'} textAlign={'center'}>
                <TypeWriter
                  options={{
                    strings: ["Hi, I'm Patrick!", 'Welcome to my portfolio!'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                {/* Hi, I'm Patrick! */}
              </Heading>
              <Spacer />
              <Box
                w='100%'
                display={'flex'}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Code
                  textAlign={'center'}
                  color={color}
                  fontSize={{ base: 'lg', md: 'xl' }}
                >
                  Computer Engineer
                </Code>
              </Box>

              <Spacer />
              <Text textAlign={'justify'}>
                a passionate computer engineer with a strong interest in
                developing top-notch solutions for real-world problems.
              </Text>
              <HStack
                w='100%'
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/john-patrick-ryan-mandal-407bb8270/'
                  rel='noreferrer'
                >
                  <Icon
                    cursor={'pointer'}
                    _hover={{ transform: 'translateY(-5px)' }}
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
                    cursor={'pointer'}
                    _hover={{ transform: 'translateY(-6px)' }}
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
                  {' '}
                  <Icon
                    cursor={'pointer'}
                    _hover={{ transform: 'translateY(-7px)' }}
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
      </Box>

      <Box w={'100%'} h={'1000px'} id='about'></Box>
      <Box w={'100%'} h={'1000px'} id='projects'></Box>
    </Container>
  );
};
