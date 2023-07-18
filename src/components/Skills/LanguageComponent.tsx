import { Box, Flex, Tooltip } from '@chakra-ui/react';

interface LanguageProps {
  children: React.ReactNode;
  label: string;
}

export const LanguageComponent = ({ children, label }: LanguageProps) => {
  return (
    <Box
      width={'50px'}
      height={'50px'}
      borderRadius={'50%'}
      _hover={{ transform: 'scale(1.2)' }}
      transition={'0.2s'}
      flexDirection={'row'}
      justifyContent={'center'}
      boxShadow={'lg'}
      cursor={'pointer'}
      p={'auto'}
    >
      <Tooltip label={label} hasArrow>
        {children}
      </Tooltip>
    </Box>
  );
};
