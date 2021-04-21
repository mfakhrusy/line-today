import { Flex } from '@chakra-ui/react';
import { getHomeQuery, Article } from 'api/home/getHomeQuery';
import HomeBodyArticleList from 'screens/home/HomeBodyArticleList';
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
            // manually adding type here
            // each type can use different UI template
            // as needed
            case 6:
            case 50:
            case 59:
            case 63:
            case 68:
            case 79:
            case 80:
            case 6301:
              return (
                <HomeBodyArticleList
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
