import { useEffect, useState } from 'react';
import { Button, Icon, IconButton } from '@chakra-ui/react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const GoUpButton = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const middleThreshold = window.innerHeight / 2;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > middleThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGoUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconButton
      colorScheme='teal'
      aria-label='Go Up'
      icon={<AiOutlineArrowUp />}
      position='fixed'
      bottom='4'
      right='4'
      opacity={isSticky ? 1 : 0}
      pointerEvents={isSticky ? 'auto' : 'none'}
      transition='opacity 0.3s ease'
      onClick={handleGoUp}
    />
  );
};
