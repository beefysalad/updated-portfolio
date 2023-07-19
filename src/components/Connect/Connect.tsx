import {
  Box,
  Button,
  Code,
  HStack,
  Heading,
  Icon,
  Input,
  Link,
  Spacer,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { MdCall, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
export const Connect = () => {
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  const color = useColorModeValue('black', '#64ffda');
  const marginTopBase = useBreakpointValue({ base: '20px', md: '0' });
  return (
    <Box id={'connect'} w={{ base: '100%', md: '70%' }} color={bg} mt='150px'>
      <HStack w='100%' flexDirection={{ base: 'column', md: 'column' }}>
        <Heading size='2xl'>Connect</Heading>
        <Text>Get in touch with me</Text>
        <Box w='100%'>
          <HStack
            flexDirection={{ base: 'column', md: 'row' }}
            p={10}
            spacing={0}
            m='auto'
          >
            <Box w='100%'>
              <HStack>
                <Icon as={MdCall} boxSize={'10'} />
                <HStack
                  alignItems={'flex-start'}
                  w='100%'
                  flexDirection={'column'}
                >
                  <Heading size={'md'}>Text or Call me</Heading>
                  <Code color={color}>+639 561 500 217</Code>
                </HStack>
              </HStack>
              <HStack mt={{ base: '5', md: '10' }}>
                <Icon as={MdEmail} boxSize={'10'} />

                <HStack
                  alignItems={'flex-start'}
                  w='100%'
                  flexDirection={'column'}
                >
                  <Heading textAlign={'right'} size={'md'}>
                    Email me
                  </Heading>
                  <Code color={color}>mandal.johnpatrickryan.@gmail.com</Code>
                </HStack>
              </HStack>
              <HStack mt={{ base: '5', md: '10' }}>
                <Icon as={FaLinkedin} boxSize={'10'} />
                <HStack
                  alignItems={'flex-start'}
                  w='100%'
                  flexDirection={'column'}
                >
                  <Heading
                    textAlign={'right'}
                    size={'md'}
                    as={Link}
                    href='https://www.linkedin.com/in/john-patrick-ryan-mandal-407bb8270/'
                    target='_blank'
                    _hover={{ textDecoration: 'none' }}
                  >
                    Connect
                  </Heading>
                </HStack>
              </HStack>
            </Box>
            <Spacer />
            <Box w='100%' style={{ marginTop: marginTopBase }}>
              <VStack>
                <Input placeholder='Your Name' variant='filled' />
                <Input type='email' placeholder='Your Email' variant='filled' />
                <Textarea
                  placeholder='Your Message'
                  variant='filled'
                  resize={'none'}
                />
              </VStack>
              <Button variant='outline' colorScheme='teal'>
                Submit
              </Button>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};
