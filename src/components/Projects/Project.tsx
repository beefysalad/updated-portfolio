import {
  Box,
  HStack,
  Heading,
  Spacer,
  Stack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import tems from '../../assets/temslogo.png';
export const Project = () => {
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  return (
    <Box w={{ base: '100%', md: '70%' }} color={bg} id='projects' mt='150px'>
      <VStack>
        <Heading>Projects</Heading>

        <Stack
          justifyContent={'space-evenly'}
          flexDirection={{ base: 'row', md: 'column' }}
        >
          <ProjectCard
            image={tems}
            title='TeknoyEMS'
            description='an events manager system developed for Cebu Institute of Technology - University. The system handles event, venue, equipment and etc. management reservations for the Multimedia Solutions Department of CIT-U.'
            tags={[
              'React',
              'TypeScript',
              'Nest.js',
              'Next.js',
              'Prisma',
              'PostgreSQL',
            ]}
            type={[
              'Web',
              'School Project',
              'Team Project',
              'University Project',
            ]}
            role='Fullstack Developer'
            demo='https://teknoy-ems-staging.vercel.app/'
            repo='https://github.com/citu-cpe/teknoy-ems'
          />

          <Spacer />

          <Spacer />
        </Stack>
      </VStack>
    </Box>
  );
};
