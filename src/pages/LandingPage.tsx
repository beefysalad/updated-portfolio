import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Code,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Highlight,
  Icon,
  Image,
  Link,
  Progress,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import logo from '../assets/bg-pic.png';

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaUserGraduate,
  FaCalendar,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
import { GoMortarBoard } from 'react-icons/go';
import { MdWork } from 'react-icons/md';
import TypeWriter from 'typewriter-effect';
import { useState } from 'react';
export const LandingPage = () => {
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  const color = useColorModeValue('black', '#64ffda');

  return (
    <Container
      maxW='100%'
      justifyContent={'center'}
      as={Flex}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Box w='100%' color={bg} id='home' h='100vh'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-evenly' }}
          alignItems={'center'}
        >
          <Image src={logo} boxSize={{ base: '150%', md: '25%' }} />
          <Box maxW={{ base: '70%', md: '30%' }}>
            <VStack style={{ alignItems: 'flex-start' }} spacing={2}>
              <Heading size={'xl'} textAlign={'center'}>
                <TypeWriter
                  options={{
                    strings: [
                      'John Patrick Ryan Mandal',
                      'Patrick',
                      'Ryan',
                      'JP',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
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
                    _hover={{ transform: 'translateY(-7px)' }}
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
                    _hover={{ transform: 'translateY(-9px)' }}
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
      <Box w='70%' color={bg} id='about'>
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
            JavaScript, My tech stack includes but not limited to
            <Code fontSize={'md'} color={color}>
              Nest.js
            </Code>
            ,{' '}
            <Code fontSize={'md'} color={color}>
              React with TypeScript
            </Code>
            , and{' '}
            <Code fontSize={'md'} color={color}>
              MySQL with Prisma ORM
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
            <Icon color={color} boxSize={7} as={GoMortarBoard} />
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
            <Icon color={color} boxSize={7} as={MdWork} />
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
      <Box w={'70%'} color={bg} id='skills'>
        <VStack
          mt={50}
          w='100%'
          flexDirection={{ base: 'column', md: 'column' }}
        >
          <Heading>Skills</Heading>
          <Text>My Technical Skills</Text>
          <HStack w='100%' flexDirection={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '100%', md: '50%' }}>
              <Accordion allowToggle={false} defaultIndex={[0]}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='right'>
                        <HStack>
                          {' '}
                          <Heading size='md' textAlign={'center'}>
                            Frontend Development
                          </Heading>
                        </HStack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={8} as={ImHtmlFive} />
                          <Text>HTML</Text>
                        </HStack>
                        <Box>
                          <Text>80%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        mt='2'
                        size='md'
                        value={80}
                        colorScheme='teal'
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={9} as={FaCss3Alt} />
                          <Text>CSS</Text>
                        </HStack>
                        <Box>
                          <Text>70%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={70}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={7} as={SiJavascript} />
                          <Text>JavaScript</Text>
                        </HStack>
                        <Box>
                          <Text>75%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={75}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={8} as={FaReact} />
                          <Text>React</Text>
                        </HStack>
                        <Box>
                          <Text>70%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        aria-valuenow={70}
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={70}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={8} as={FaBootstrap} />
                          <Text>Bootstrap</Text>
                        </HStack>
                        <Box>
                          <Text>40%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        aria-valuenow={80}
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={40}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box w={{ base: '100%', md: '50%' }}>
              <Accordion allowToggle={false} defaultIndex={[0]}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='right'>
                        <HStack>
                          {' '}
                          <Heading size='md' textAlign={'center'}>
                            Backend Development
                          </Heading>
                        </HStack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={8} as={FaNodeJs} />
                          <Text>Node.js</Text>
                        </HStack>
                        <Box>
                          <Text>80%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        mt='2'
                        colorScheme={'teal'}
                        size='md'
                        value={80}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={9} as={FaCss3Alt} />
                          <Text>Express.js</Text>
                        </HStack>
                        <Box>
                          <Text>70%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={70}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={7} as={SiJavascript} />
                          <Text>Nest.js</Text>
                        </HStack>
                        <Box>
                          <Text>75%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={75}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={8} as={FaReact} />
                          <Text>TypeScript</Text>
                        </HStack>
                        <Box>
                          <Text>70%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        aria-valuenow={70}
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={70}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                    <Box mt='5'>
                      <HStack justifyContent={'space-between'}>
                        <HStack>
                          <Icon boxSize={8} as={FaBootstrap} />
                          <Text>Bootstrap</Text>
                        </HStack>
                        <Box>
                          <Text>40%</Text>
                        </Box>
                      </HStack>
                      <Progress
                        aria-valuenow={80}
                        mt='2'
                        colorScheme='teal'
                        size='md'
                        value={40}
                        hasStripe
                        isAnimated={true}
                      />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </HStack>
          <Box w={'100%'}></Box>
        </VStack>
      </Box>
    </Container>
  );
};
