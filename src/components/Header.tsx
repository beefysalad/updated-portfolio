import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Header = () => {
  return (
    <Box
      zIndex='1'
      maxH={{ base: '70px', md: '70px' }}
      h='full'
      w='full'
      position='fixed'
      top='0'
      left='0'
      boxShadow='lg'
    >
      <Flex
        justifyContent={'center'}
        px={{ base: '3', md: '5', lg: '8' }}
        py={{ base: '6', md: '5', lg: '6' }}
      >
        <HStack spacing={{ base: '3', md: '10' }}>
          <Heading size={{ base: 'md' }}>
            <Link href='#'>Home</Link>
          </Heading>
          <Heading size={{ base: 'md' }}>
            <Link href='#'>Projects</Link>
          </Heading>
          <Heading size={{ base: 'md' }}>
            <Link href='#'>Socials</Link>
          </Heading>
          <Heading size={{ base: 'md' }}>
            <Link href='#'>Resume</Link>
          </Heading>
          <Spacer />
        </HStack>
      </Flex>
    </Box>
  );
};
