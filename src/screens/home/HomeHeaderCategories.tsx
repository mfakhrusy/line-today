import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import { getHomeQuery } from 'api/home/getHomeQuery';
import HomeHeaderCategoryItem from 'screens/home/HomeHeaderCategoryItem';

function HomeHeaderCategories() {
  const data = getHomeQuery();
  const headerItems = data.data?.result.categories.map(({ name, id }) => ({ name, id }));
  const MAX_HEADER_ITEMS = 8;
  const MAX_HEADER_ITEMS_MOBILE = 4;
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const maxHeaderItems = isSmallerThan768 ? MAX_HEADER_ITEMS_MOBILE : MAX_HEADER_ITEMS;

  return (
    <Flex>
      {headerItems?.slice(0, maxHeaderItems)
        .map(({ name, id }) => (
          <HomeHeaderCategoryItem text={name} id={id} key={id} />
        ))}
      <ChevronDownIcon w={8} h={8} alignSelf="center" ml={2} cursor="pointer" />
    </Flex>
  );
}

export default HomeHeaderCategories;
