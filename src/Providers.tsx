import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter,
} from 'react-router-dom';

const queryClient = new QueryClient();

function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default Providers;
