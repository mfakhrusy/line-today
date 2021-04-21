import {
  Flex,
} from '@chakra-ui/react';
import HomeHeaderCategories from 'screens/home/HomeHeaderCategories';

function HomeHeader() {
  return (
    <Flex width="100%" padding={3} flexDir="column">
      <HomeHeaderCategories />
    </Flex>
  );
}

export default HomeHeader;
