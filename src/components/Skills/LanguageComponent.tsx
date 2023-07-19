import { Box, Tooltip } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
interface LanguageProps {
  children: React.ReactNode;
  label: string;
}

export const LanguageComponent = ({ children, label }: LanguageProps) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsSpinning(true);
  };

  const handleMouseLeave = () => {
    setIsSpinning(false);
  };

  return (
    <Box
      width={'50px'}
      height={'50px'}
      borderRadius={'50%'}
      flexDirection={'row'}
      justifyContent={'center'}
      boxShadow={'lg'}
      cursor={'pointer'}
      p={'auto'}
      as={motion.div}
      animate={{ rotate: isSpinning ? 360 : 0 }}
      transition={{ duration: '0.2', ease: 'linear' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Tooltip label={label} hasArrow>
        {children}
      </Tooltip>
    </Box>
  );
};
