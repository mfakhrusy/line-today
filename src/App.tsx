import {
  Box, Button, Flex, Image,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import lineToday from 'assets/line-today.svg';
import Router from 'Router';

function App() {
  const history = useHistory();

  return (
    <Flex justifyContent="center" bgColor="#eeeeee" minH="100vh">
      <Box maxWidth="800px" width="768px" bgColor="white">
        <Flex justifyContent="space-between" padding="12px 12px 0 12px">
          <Image src={lineToday} maxW="72px" onClick={() => history.push('/')} cursor="pointer" />
          <Flex>
            <Button variant="link" onClick={() => history.push('/bookmark')}>Halaman Bookmark</Button>
          </Flex>
        </Flex>
        <Box h={2} />
        <Router />
      </Box>
    </Flex>
  );
}

export default App;
