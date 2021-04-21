import {
  Box,
  Flex,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import { Article } from 'api/home/getHomeQuery';
import { makeImageURL } from 'api/makeImageURL';
import HomeArticleCard from 'screens/home/HomeArticleCard';

type Props = {
  title: string;
  articles: Array<Article>
};

function HomeBodyArticleList({ title, articles }: Props) {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex flexDir="column" p={isSmallerThan768 ? '16px' : '24px 32px'}>
      <Heading as="h1" size="md" textTransform="uppercase">
        {title}
      </Heading>
      <Box h={4} />
      <Flex flexWrap="wrap" justifyContent="flex-start">
        {
        articles.map(({
          title: articleTitle,
          thumbnail,
          publisher,
          id,
          url,
        }, index) => (
          <HomeArticleCard
            key={id}
            index={index}
            articleId={id}
            articleURL={url?.url ?? ''}
            imageURL={makeImageURL(thumbnail?.hash ?? '')}
            articleTitle={articleTitle ?? ''}
            publisher={publisher ?? ''}
          />
        ))
      }
      </Flex>
    </Flex>
  );
}

export default HomeBodyArticleList;
