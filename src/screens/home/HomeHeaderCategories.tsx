import { Flex, useMediaQuery } from '@chakra-ui/react';
import { getHomeQuery } from 'api/home/getHomeQuery';
import HomeHeaderCategoryItem from 'screens/home/HomeHeaderCategoryItem';

function HomeHeaderCategories() {
  const data = getHomeQuery();
  const headerItems = data.data?.result.categories.map(({ name, id }) => ({ name, id }));
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      flexWrap={isSmallerThan768 ? 'nowrap' : 'wrap'}
      overflowX={isSmallerThan768 ? 'scroll' : 'auto'}
      maxW={isSmallerThan768 ? '93vw' : '100vw'}
    >
      {headerItems?.map(({ name, id }) => (
        <HomeHeaderCategoryItem text={name} id={id} key={id} />
      ))}
    </Flex>
  );
}

export default HomeHeaderCategories;
