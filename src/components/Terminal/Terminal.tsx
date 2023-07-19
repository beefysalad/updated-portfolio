import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import TypeWriter from 'typewriter-effect';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
export const Terminal = () => {
  const ref = useRef(null);
  const bg = useColorModeValue('rgb(9,24,47)', 'gray.50');
  const inView = useInView(ref);
  return (
    <Box w={{ base: '100%', md: '70%' }} color={bg} mt='150px'>
      <Flex justifyContent={'center'}>
        <Box
          bg='black'
          w='500px'
          h='300px'
          boxShadow={'lg'}
          borderRadius={'md'}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          }}
          transition={{ duration: '0.2' }}
          ref={ref}
        >
          <HStack
            w='100%'
            h='35px'
            bg='rgb(55,65,81)'
            px='3'
            borderTopRadius={'md'}
          >
            <Box
              bg='rgb(239,68,68)'
              w='12px'
              h='12px'
              borderRadius={'50%'}
            ></Box>
            <Box
              bg='rgb(234,179,8)'
              w='12px'
              h='12px'
              borderRadius={'50%'}
            ></Box>
            <Box
              bg='rgb(34,197,94)'
              w='12px'
              h='12px'
              borderRadius={'50%'}
            ></Box>
            <Text fontSize={'xs'} color='gray.100'>
              MINGW64:/c/Users/Patrick
            </Text>
          </HStack>
          <Box h='100%' w='100%' p='30'>
            <HStack>
              <Text color='rgb(0,191,0)' fontSize={'xs'}>
                Patrick@BeefySaladx
              </Text>
              <Text color='rgb(136,0,164)' fontSize={'xs'}>
                MINGW64
              </Text>
              <Text color='rgb(191,191,0)' fontSize={'xs'}>
                ~
              </Text>
            </HStack>
            <Text color='rgb(191,191,0)' fontSize={'sm'}>
              $
            </Text>
            <HStack>
              <Box mt='5px'>
                {' '}
                <Text
                  fontSize={'sm'}
                  color='rgb(0,191,0)'
                  textAlign={'justify'}
                >
                  <TypeWriter
                    options={{
                      strings: [
                        "As a web enthusiast, I thrive on cutting-edge tech and innovation. Front-end, back-end, or frameworks – I embrace it all. Eager to collaborate and bring your visions to life. Let's build something amazing together! Explore my portfolio. 🚀",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 20,
                    }}
                  />
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
