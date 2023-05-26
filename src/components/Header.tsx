import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Header = () => {
  return (
    <Box bg='tomato' zIndex='1' w='full'>
      {' '}
      Header
      <ColorModeSwitcher />
    </Box>
  );
};
