import { Box } from '@chakra-ui/react';
import HomeBody from 'screens/home/HomeBody';
import HomeHeader from 'screens/home/HomeHeader';

function HomeScreen() {
  return (
    <Box>
      <HomeHeader />
      <HomeBody />
    </Box>
  );
}

export default HomeScreen;
