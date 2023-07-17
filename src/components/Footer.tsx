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
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
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
      <Flex justifyContent={'center'} py='5' px='200px'>
        <VStack mt='5' textAlign={'center'} w='100%'>
          <Heading size={'lg'}>Patrick</Heading>

          <HStack
            w='100%'
            justifyContent={{ base: 'center', md: 'flex-start' }}
          >
            <a
              target='_blank'
              href='https://www.linkedin.com/in/john-patrick-ryan-mandal-407bb8270/'
              rel='noreferrer'
            >
              <Icon cursor={'pointer'} boxSize={5} as={FaLinkedin} />
            </a>
            <a
              target='_blank'
              href='https://github.com/beefysalad'
              rel='noreferrer'
            >
              <Icon cursor={'pointer'} boxSize={5} as={FaGithub} />
            </a>
            <a
              target='_blank'
              href='https://www.facebook.com/Jpatrickzxc/'
              rel='noreferrer'
            >
              {' '}
              <Icon cursor={'pointer'} boxSize={5} as={FaFacebook} />
            </a>
            <a target='_blank' href='#' rel='noreferrer'>
              {' '}
              <Icon cursor={'pointer'} boxSize={5} as={MdEmail} />
            </a>
            <a target='_blank' href='#' rel='noreferrer'>
              {' '}
              <Icon cursor={'pointer'} boxSize={5} as={FaInstagram} />
            </a>
          </HStack>
        </VStack>
      </Flex>
      <Divider orientation='horizontal' w='100%' />
    </Box>
  );
};
export default Footer;
