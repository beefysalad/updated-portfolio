import {
  Box,
  VStack,
  Text,
  Icon,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaReddit,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
export const FloatingSocialBar = () => {
  const color = useColorModeValue('black', '#64ffda');
  const boxShadowValue = useColorModeValue('gray.50', 'rgba(9,24,47,0.1)');
  const [bottomPosition, setBottomPosition] = useState('-240px');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = window.pageYOffset / scrollThreshold;
      const barHeight = 240;
      const maxBottomPosition = 0;
      const scrollSpeedFactor = 1.5; // Adjust the scroll speed factor (increase for faster scrolling)

      if (scrollProgress < 1) {
        const newBottomPosition =
          -(
            barHeight *
            (1 - Math.pow(scrollProgress, scrollSpeedFactor))
          ).toFixed(0) + 'px';
        setBottomPosition(newBottomPosition);
        setIsVisible(true);
      } else {
        setBottomPosition(maxBottomPosition + 'px');
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isMobile) {
    return null;
  }
  return (
    <VStack
      position='fixed'
      bottom={bottomPosition}
      w='50px'
      h='240px'
      marginLeft={'50px'}
      borderRadius={'3xl'}
      outline={`1px solid ${color}`}
      bg={boxShadowValue}
      boxShadow={'lg'}
      py='5'
      px='5'
      opacity={isVisible ? 1 : 0}
      pointerEvents={isVisible ? 'auto' : 'none'}
    >
      <a
        target='_blank'
        href='https://www.linkedin.com/in/john-patrick-ryan-mandal-407bb8270/'
        rel='noreferrer'
      >
        <Icon
          _hover={{ transform: 'scale(1.3)' }}
          transition={'0.2s'}
          cursor={'pointer'}
          boxSize={5}
          as={FaLinkedin}
        />
      </a>
      <a target='_blank' href='https://github.com/beefysalad' rel='noreferrer'>
        <Icon
          _hover={{ transform: 'scale(1.3)' }}
          transition={'0.2s'}
          cursor={'pointer'}
          boxSize={5}
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
          _hover={{ transform: 'scale(1.3)' }}
          transition={'0.2s'}
          cursor={'pointer'}
          boxSize={5}
          as={FaFacebook}
        />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.instagram.com/ptrcckkk/'
      >
        {' '}
        <Icon
          _hover={{ transform: 'scale(1.3)' }}
          transition={'0.2s'}
          cursor={'pointer'}
          boxSize={5}
          as={FaInstagram}
        />
      </a>
      <a target='_blank' rel='noreferrer' href='https://twitter.com/zephyrusx_'>
        {' '}
        <Icon
          _hover={{ transform: 'scale(1.3)' }}
          transition={'0.2s'}
          cursor={'pointer'}
          boxSize={5}
          as={FaTwitter}
        />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.reddit.com/user/BeefedSalad_'
      >
        {' '}
        <Icon
          _hover={{ transform: 'scale(1.3)' }}
          transition={'0.2s'}
          cursor={'pointer'}
          boxSize={5}
          as={FaReddit}
        />
      </a>
    </VStack>
  );
};
