import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logo from '../assets/logo.png';
export const Header = () => {
  const bg = useColorModeValue('gray.50', 'rgb(9,24,47)');
  const boxShadow = useColorModeValue('lg', '2xl');
  return (
    <Box
      zIndex='10'
      maxH={{ base: '70px', md: '70px' }}
      h='full'
      w='full'
      position='fixed'
      top='0'
      left='0'
      boxShadow={boxShadow}
      bg={bg}
    >
      <Flex
        justifyContent={'center'}
        px={{ base: '3', md: '5', lg: '8' }}
        py={{ base: '6', md: '5', lg: '5' }}
      >
        <Image src={logo} alt='logo' boxSize='40px' />
        <Spacer />
        <HStack spacing={{ base: '1', md: '10' }}>
          <Heading size={{ base: 'sm', md: 'md', lg: 'md' }}>
            <Link href='#' _hover={{ underline: 'none' }}>
              Home
            </Link>
          </Heading>
          <Heading size={{ base: 'sm', md: 'md', lg: 'md' }}>
            <Link href='#' _hover={{ underline: 'none' }}>
              Projects
            </Link>
          </Heading>
          <Heading size={{ base: 'sm', md: 'md', lg: 'md' }}>
            <Link href='#' _hover={{ underline: 'none' }}>
              Socials
            </Link>
          </Heading>
          <Heading size={{ base: 'sm', md: 'md', lg: 'md' }}>
            <Link href='#' _hover={{ underline: 'none' }}>
              Resume
            </Link>
          </Heading>
        </HStack>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};
