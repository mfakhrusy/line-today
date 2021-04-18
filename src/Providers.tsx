import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';

function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <BrowserRouter>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default Providers;
