import {
  Flex,
} from '@chakra-ui/react';
// import lineToday from 'assets/line-today.svg';
// import { useHistory } from 'react-router-dom';
import HomeHeaderCategories from 'screens/home/HomeHeaderCategories';

function HomeHeader() {
  // const history = useHistory();

  return (
    <Flex width="100%" padding={3} flexDir="column">
      <HomeHeaderCategories />
    </Flex>
  );
}

export default HomeHeader;
