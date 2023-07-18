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
export const About = () => {
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  const color = useColorModeValue('black', '#64ffda');
  return (
    <Box w={{ base: '100%', md: '70%' }} color={bg} id='about' mt='100px'>
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
          as={Link}
          href='https://drive.google.com/file/d/1w5mDd46XK6ZuOFg28yDyy1XOdTqA5xu8/view'
          target='_blank'
          _hover={{ transform: 'translateX(-5px)', textDecoration: 'none' }}
          transition='transform 0.3s'
        >
          Download CV
        </Button>
      </VStack>
      <VStack alignItems={{ base: 'center', md: 'flex-end' }} mt={'80px'}>
        <HStack>
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
        </HStack>
        <Text textAlign={{ base: 'center' }}>
          Cebu Institute of Technology - University
        </Text>
        <Code fontSize={'md'} color={color} textAlign={'center'}>
          Bachelor of Science in Computer Engineering
        </Code>
        <Badge variant='outline'>College</Badge>
        <HStack>
          {' '}
          <p>2018 - 2023 </p>
          <Icon color={color} boxSize={5} as={FaCalendar} />
        </HStack>
      </VStack>

      <VStack alignItems={{ base: 'center', md: 'flex-start' }} mt={'50px'}>
        <HStack>
          <Icon boxSize={7} as={MdWork} />
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
        </HStack>
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
    </Box>
  );
};
