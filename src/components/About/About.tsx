import {
  Badge,
  Box,
  Button,
  Code,
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
import { FaCalendar } from 'react-icons/fa';
import { GoMortarBoard } from 'react-icons/go';
import { MdWork } from 'react-icons/md';
import TypeWriter from 'typewriter-effect';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
export const About = () => {
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  const color = useColorModeValue('black', '#64ffda');
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const inView = useInView(ref);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);
  const handleDownload = () => {
    const fileId = '1w5mDd46XK6ZuOFg28yDyy1XOdTqA5xu8';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'Mandal.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box w={{ base: '100%', md: '70%' }} color={bg} id='about' mt='300px'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 0 }}
        animate={inView ? { opacity: 1, x: -1 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.7 }} // Animation duration
      >
        <VStack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size={'3xl'} textAlign={'center'}>
            <TypeWriter
              options={{
                strings: ['Bio', 'About Me', 'Who am I ?'],
                autoStart: true,
                loop: true,
              }}
            />
          </Heading>
          <Spacer />
          <Text textAlign={'justify'}>
            I am an aspiring{' '}
            <Code fontSize={'md'} color={color}>
              Software Engineer
            </Code>{' '}
            with fullstack web development skills based in Cebu, Philippines.
          </Text>
          <Spacer />
          <Text textAlign={'justify'}>
            As a graduate of Bachelor of Science in Computer Engineering, I am
            dedicated to building innovative and dynamic web applications that
            exceed expectations. With a strong foundation in HTML, CSS, and
            JavaScript, My tech stack includes but not limited to{' '}
            <Code fontSize={'md'} color={color}>
              Nest.js
            </Code>
            ,{' '}
            <Code fontSize={'md'} color={color}>
              React
            </Code>{' '}
            with{' '}
            <Code fontSize={'md'} color={color}>
              TypeScript
            </Code>
            , and{' '}
            <Code fontSize={'md'} color={color}>
              MySQL
            </Code>{' '}
            with{' '}
            <Code fontSize={'md'} color={color}>
              Prisma ORM
            </Code>
            .
          </Text>

          <Button
            mt={10}
            variant={'outline'}
            colorScheme='teal'
            onClick={handleDownload}
            _hover={{ transform: 'translateX(-5px)', textDecoration: 'none' }}
            transition='transform 0.3s'
          >
            Download CV
          </Button>
        </VStack>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: 0 }}
        animate={inView2 ? { opacity: 1, x: -1 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.7 }} // Animation duration
      >
        <VStack alignItems={{ base: 'center', md: 'flex-end' }} mt={'80px'}>
          <Flex
            flexDir={{ base: 'column-reverse', md: 'row' }} // Flex direction changes to 'column-reverse' on small screens and 'row' on medium screens and above
            alignItems='center' // Align items vertically in the center
            justifyContent='center' // Center the children horizontally
          >
            <Heading size={'xl'} textAlign={'center'}>
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Education')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .start();
                }}
              />
            </Heading>
            <Icon boxSize={7} as={GoMortarBoard} />
          </Flex>
          <Text textAlign={{ base: 'center' }}>
            Cebu Institute of Technology - University
          </Text>
          <Code fontSize={'md'} color={color} textAlign={'center'}>
            Bachelor of Science in Computer Engineering
          </Code>
          <Badge variant='outline'>College</Badge>
          <HStack as={Flex}>
            <Text order={{ base: 1, md: 0 }}>2018-2023</Text>

            <Icon color={color} boxSize={5} as={FaCalendar} />
          </HStack>
        </VStack>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, x: 0 }}
        animate={inView3 ? { opacity: 1, x: -1 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.7 }} // Animation duration
      >
        <VStack alignItems={{ base: 'center', md: 'flex-start' }} mt={'50px'}>
          <Flex
            flexDir={{ base: 'column-reverse', md: 'row' }} // Flex direction changes to 'column-reverse' on small screens and 'row' on medium screens and above
            alignItems='center' // Align items vertically in the center
            justifyContent='center' // Center the children horizontally
          >
            <Icon order={{ base: 1, md: 0 }} boxSize={7} as={MdWork} />
            <Heading size={'xl'} textAlign={'center'}>
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Experience')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .start();
                }}
              />
            </Heading>
          </Flex>
          <Text>Sprobe Inc.</Text>
          <Code fontSize={'md'} color={color} textAlign={'center'}>
            Fullstack Web Developer
          </Code>
          <Badge variant='outline'>Internship</Badge>
          <HStack>
            {' '}
            <Icon color={color} boxSize={5} as={FaCalendar} />
            <p>June - August 2022</p>
          </HStack>
        </VStack>
      </motion.div>
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, x: 0 }}
        animate={inView4 ? { opacity: 1, x: -1 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.7 }} // Animation duration
      >
        <VStack alignItems={{ base: 'center', md: 'flex-end' }} mt={'80px'}>
          <Flex
            flexDir={{ base: 'column-reverse', md: 'row' }} // Flex direction changes to 'column-reverse' on small screens and 'row' on medium screens and above
            alignItems='center' // Align items vertically in the center
            justifyContent='center' // Center the children horizontally
          >
            <Heading size={'xl'} textAlign={'center'}>
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Experience')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .start();
                }}
              />
            </Heading>
            <Icon boxSize={7} as={MdWork} />
          </Flex>
          <Text textAlign={{ base: 'center' }}>Alliance Software Inc.</Text>
          <Code fontSize={'md'} color={color} textAlign={'center'}>
            Technical Specialist - Software Developer
          </Code>
          <Badge variant='outline'>Full Time</Badge>
          <HStack as={Flex}>
            <Text order={{ base: 1, md: 0 }}>August - Present</Text>

            <Icon color={color} boxSize={5} as={FaCalendar} />
          </HStack>
        </VStack>
      </motion.div>
    </Box>
  );
};
