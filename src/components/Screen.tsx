import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

function Screen({ children }: PropsWithChildren<{}>) {
  return (
    <Box>
      {children}
    </Box>
  );
}

export default Screen;
