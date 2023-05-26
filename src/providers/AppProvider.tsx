import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../theme/theme';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Router>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Router>
  );
};
