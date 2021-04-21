import { Flex } from '@chakra-ui/react';
import { getHomeQuery, Article } from 'api/home/getHomeQuery';
import HomeBodyItemType59 from 'screens/home/HomeBodyItemType59';
import useHomeHeaderStore from 'store/useHomeHeaderStore';

function HomeBody() {
  const data = getHomeQuery();
  const { activeHeaderId } = useHomeHeaderStore();
  const activeCategory = data.data?.result.categories.find(({ id }) => id === activeHeaderId);

  return (
    <Flex flexDir="column">
      {
        activeCategory?.templates.map(({ title, type, sections }) => {
          switch (type) {
            case 59:
              return (
                <HomeBodyItemType59
                  key={JSON.stringify(sections ?? (`${title}${type}`))}
                  title={title ?? ''}
                  articles={sections?.reduce((prev: Array<Article>, cur) => (
                    [...prev, ...cur.articles]
                  ), []) ?? []}
                />
              );
            default:
              return null;
          }
        })
      }
    </Flex>
  );
}

export default HomeBody;
