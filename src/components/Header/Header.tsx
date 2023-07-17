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

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { useEffect, useState } from 'react';
import { FloatingSocialBar } from './FloatingSocialBar';
import { GoUpButton } from './GoUpButton';
export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const bg = useColorModeValue('gray.50', 'rgb(9,24,47)');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const boxShadow = hasScrolled ? useColorModeValue('lg', '2xl') : 'none';
  const logoColor = useColorModeValue('#058C42', '#64ffda');
  const headerText = useColorModeValue('#058C42', '#64ffda');
  const scrollToTarget = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(target);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      setHasScrolled(scrollPos > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
        px={{ base: '10', md: '5', lg: '8' }}
        py={{ base: '6', md: '5', lg: '5' }}
      >
        <Heading
          cursor={'pointer'}
          size='md'
          // display={{ base: 'none', md: 'inline' }}
          _hover={{ color: logoColor }}
        >
          Trek
        </Heading>
        <Spacer />
        <HStack spacing={{ base: '1', md: '10' }}>
          <Heading
            display={{ base: 'none', md: 'inline' }}
            size={{ base: 'xs', md: 'sm', lg: 'sm' }}
            _hover={{ color: headerText }}
          >
            <Text
              cursor={'pointer'}
              _hover={{ underline: 'none' }}
              onClick={() => scrollToTarget('home')}
            >
              Home
            </Text>
          </Heading>
          <Heading
            display={{ base: 'none', md: 'inline' }}
            size={{ base: 'xs', md: 'sm', lg: 'sm' }}
            _hover={{ color: headerText }}
          >
            <Text
              cursor={'pointer'}
              _hover={{ underline: 'none' }}
              onClick={() => scrollToTarget('about')}
            >
              About
            </Text>
          </Heading>
          <Heading
            display={{ base: 'none', md: 'inline' }}
            size={{ base: 'xs', md: 'sm', lg: 'sm' }}
            _hover={{ color: headerText }}
          >
            <Text
              cursor={'pointer'}
              _hover={{ underline: 'none' }}
              onClick={() => scrollToTarget('skills')}
            >
              Skills
            </Text>
          </Heading>
          <Heading
            display={{ base: 'none', md: 'inline' }}
            size={{ base: 'xs', md: 'sm', lg: 'sm' }}
            _hover={{ color: headerText }}
          >
            <Text
              cursor={'pointer'}
              _hover={{ underline: 'none' }}
              onClick={() => scrollToTarget('projects')}
            >
              Projects
            </Text>
          </Heading>
          <Heading
            display={{ base: 'none', md: 'inline' }}
            size={{ base: 'xs', md: 'sm', lg: 'sm' }}
            _hover={{ color: headerText }}
          >
            <Text
              cursor={'pointer'}
              _hover={{ underline: 'none' }}
              onClick={() => scrollToTarget('socials')}
            >
              Socials
            </Text>
          </Heading>
        </HStack>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
      <FloatingSocialBar />
      <GoUpButton />
    </Box>
  );
};
