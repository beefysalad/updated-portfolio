import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import avatar from '../../assets/bg-pic.png';
import { FaGithub } from 'react-icons/fa';
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  type: string[];
  role: string;
  image: string;
  repo?: string;
  demo?: string;
}
export const ProjectCard = ({
  title,
  description,
  type,
  tags,
  role,
  image,
  repo,
  demo,
}: ProjectCardProps) => {
  return (
    <Card maxW='lg'>
      <CardBody>
        <Heading size='lg' textAlign={'center'} mb='5'>
          {title}
        </Heading>
        <Image
          src={image}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          width={'100%'}
          height={'250'}
        />
        <Stack mt='6' spacing='3'>
          <Text textAlign={'center'}>{description}</Text>
          <Divider />
          <Center>
            <Wrap spacing={2} justify='center'>
              {tags.map((tag) => (
                <WrapItem key={tag}>
                  <Tag
                    cursor={'pointer'}
                    size='md'
                    borderRadius='full'
                    colorScheme='teal'
                  >
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
              {type.map((type) => (
                <WrapItem key={type}>
                  <Tag
                    cursor={'pointer'}
                    size='md'
                    borderRadius='full'
                    colorScheme='red'
                  >
                    <TagLabel>{type}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
              {/* <Badge cursor={'pointer'} colorScheme='green'>
                {role}
              </Badge> */}
            </Wrap>
          </Center>
          <Center>
            {' '}
            <Tag size='lg' colorScheme='green' borderRadius='full'>
              <Avatar
                src={avatar}
                size='xs'
                name='Segun Adebayo'
                ml={-1}
                mr={2}
              />
              <TagLabel>{role}</TagLabel>
            </Tag>
          </Center>

          <HStack justifyContent={'space-evenly'}>
            {repo && (
              <Button
                leftIcon={<FaGithub />}
                variant='outline'
                colorScheme='teal'
                as={Link}
                href={repo}
                _hover={{
                  transform: 'translateX(-5px)',
                  textDecoration: 'none',
                }}
                transition='transform 0.3s'
                target='_blank'
              >
                Visit Repository
              </Button>
            )}
            {demo && (
              <Button
                leftIcon={<FaGithub />}
                variant={'outline'}
                colorScheme='teal'
                as={Link}
                href={demo}
                _hover={{
                  transform: 'translateX(5px)',
                  textDecoration: 'none',
                }}
                transition='transform 0.3s'
                target='_blank'
              >
                Live Demo
              </Button>
            )}
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
