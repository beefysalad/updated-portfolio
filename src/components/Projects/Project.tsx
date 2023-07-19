import {
  Box,
  HStack,
  Heading,
  Spacer,
  Stack,
  VStack,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import tems from '../../assets/temslogo.png';
import temslogo from '../../assets/temslogo.gif';
import cct from '../../assets/cct2.png';
import cctgif from '../../assets/cct.png';
import handijob from '../../assets/handijob2.png';
import iotdoorlock from '../../assets/doorlock.png';
import todo from '../../assets/todo.png';
import garpo from '../../assets/garpo_final.png';
import handijobgif from '../../assets/handijob.gif';
import todogif from '../../assets/todo.gif';
import temsgif from '../../assets/temsgif.gif';
import friendsbook from '../../assets/friendsbook.png';
import fb from '../../assets/fb.gif';
import TypeWriter from 'typewriter-effect';
export const Project = () => {
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  return (
    <Box w={{ base: '100%', md: '70%' }} color={bg} id='projects' mt='150px'>
      <VStack>
        <Heading mb='100px' size={'3xl'}>
          <TypeWriter
            options={{
              strings: ['Projects'],
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>

        <Stack
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'column' }}
          spacing={20}
        >
          <ProjectCard
            image={temslogo}
            gif={temsgif}
            title='TeknoyEMS'
            description='an events manager system developed for Cebu Institute of Technology - University. The system handles event, venue, equipment and etc. management reservations for the Multimedia Solutions Department of CIT-U.'
            tags={[
              'React',
              'TypeScript',
              'Nest.js',
              'Next.js',
              'Prisma',
              'PostgreSQL',
              'PrismaORM',
              'Chakra UI',
            ]}
            type={[
              'Web',
              'Course Project',
              'Team Project',
              'University Project',
            ]}
            role='Fullstack Developer'
            demo='https://teknoy-ems-staging.vercel.app/'
            repo='https://github.com/citu-cpe/teknoy-ems'
          />

          <Spacer />

          <ProjectCard
            image={cct}
            gif={cctgif}
            title='Contactless Covid Tracer '
            description='a contact tracer system developed for establishments in our course subject. The system handles contact tracing, health declaration, close contact notifications and etc. for partnered establishments.'
            tags={[
              'HTML',
              'CSS',
              'JavaScript',
              'Node.js',
              'Express.js',
              'Bootsrap 5',
              'MongoDB',
            ]}
            type={['Web', 'Course Project', 'Team Project']}
            role='Fullstack Developer'
            repo='https://github.com/beefysalad/Contact-Tracing-OSBE'
          />
          <Spacer />
          <ProjectCard
            image={handijob}
            title='HandiJob'
            description='a freelancing job portal developed for our course subject. The system handles job posting, job application, job bidding, and etc. for the users. The system also has real time notifications and chat system.'
            tags={[
              'React',
              'TypeScript',
              'Nest.js',
              'Next.js',
              'Prisma',
              'PostgreSQL',
              'TypeORM',
              'Chakra UI',
            ]}
            type={['Web', 'Course Project', 'Team Project']}
            role='Frontend Developer'
            repo='https://github.com/citu-cpe/handijob'
            gif={handijobgif}
          />
          <Spacer />

          <ProjectCard
            image={iotdoorlock}
            title='Iot Door Lock System'
            description='is a simple IoT Door Lock system that can be integrated to homes. The device will use RFID tags in order to unlock the door, or manually open the door thru the Blynk App.'
            tags={['Arduino', 'Blynk', 'C++', 'IFTT']}
            type={[
              'Embedded Systems',
              'Course Project',
              'Team Project',
              'Internet-of-Things',
            ]}
            role='Hardware Developer'
            repo='https://github.com/beefysalad/IOT-Door-Lock-System'
          />
          <Spacer />

          <ProjectCard
            image={todo}
            gif={todogif}
            title='To-do list Application'
            description='is a simple to-do list application that can be used to track your daily tasks. '
            tags={['React', 'TypeScript', 'Chakra UI']}
            type={['Web', 'Personal Project']}
            role='Frontend Developer'
            demo='https://ts-todo-application.vercel.app/'
            repo='https://github.com/beefysalad/ts-todo-application'
          />
          <Spacer />
          <ProjectCard
            image={garpo}
            title='GarPo '
            description='is a smart garbage collection system that can be integrated to homes. The device will use image classification to determine the type of garbage and will reward the user with points.'
            tags={[
              'Python',
              'Raspberry Pi',
              'Node.js',
              'TensorFlow Lite',
              'OpenCV',
              'Firebase',
              'Flutter',
              'Inception',
            ]}
            type={[
              'Embedded Systems',
              'Capstone',
              'Thesis',
              'Machine Learning',
              'Team Project',
              'Internet-of-Things',
            ]}
            role='Hardware Developer'
            repo='https://github.com/beefysalad/GarPo'
          />
          <Spacer />
          <ProjectCard
            image={friendsbook}
            gif={fb}
            title='FriendsBook'
            description='is a facebook clone social media application that can be used to post, like, comment, and etc. '
            tags={['Node.js', 'Express.js', 'MySQL', 'React.js', 'Chakra UI']}
            type={['Web', 'Team Project', 'Internship']}
            role='Fullstack Developer'
          />
          <Spacer />
        </Stack>
      </VStack>
    </Box>
  );
};
