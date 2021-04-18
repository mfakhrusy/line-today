import { Box, Flex } from '@chakra-ui/react';
import Router from 'Router';

function App() {
  return (
    <Flex justifyContent="center" bgColor="#eeeeee" minH="100vh">
      <Box maxWidth="800px" width="768px" bgColor="white">
        <Router />
      </Box>
    </Flex>
  );
}

export default App;
