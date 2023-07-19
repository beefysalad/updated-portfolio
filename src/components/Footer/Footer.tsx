import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  Spacer,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
  Kbd,
  Code,
} from '@chakra-ui/react';
import footerLogo from '../assets/footer-pic.svg';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
interface FooterProps {
  children?: React.ReactNode;
}
const Footer = ({ children }: FooterProps) => {
  const bg = useColorModeValue('gray.50', 'rgb(9,24,47)');
  return (
    <Box
      w='100%'
      h='150px'
      // py='5'
      bg={bg}
      mt={50}
      as={Flex}
      flexDirection={'column'}
      justifyContent={'space-between'}
      boxShadow={'lg'}
    >
      <Flex justifyContent={'center'}>
        <VStack mt='30px' textAlign={'center'}>
          <Text>
            Just like me, this website will continue to evolve.{' '}
            <span>
              <Code>Never Static</Code>
            </span>
            .
          </Text>
          <Text fontSize={'xs'}>
            Built with React, TypeScript, Chakra UI and ☕️🔥
          </Text>
          <Text fontSize={'xs'}>Copyright © Saladu 2023</Text>
          <Text fontSize={'10'}>Last Updated July 19, 2023</Text>
        </VStack>
      </Flex>
    </Box>
  );
};
export default Footer;
