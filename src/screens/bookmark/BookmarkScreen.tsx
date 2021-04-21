import {
  Box,
  Flex,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import { getHomeQuery } from 'api/home/getHomeQuery';
import { makeImageURL } from 'api/makeImageURL';
import { uniqBy } from 'lodash';
import { useMemo } from 'react';
import BookmarkArticleCard from 'screens/bookmark/BookmarkArticleCard';

function BookmarkScreen() {
  const bookmarkStorage: Array<number> = useMemo(() => JSON.parse(localStorage.getItem('bookmark') ?? '[]'), []);
  const data = getHomeQuery();
  const allArticles = data.data?.result.categories
    .flatMap((category) => category.templates
      .flatMap((template) => template.sections
        ?.flatMap((section) => section.articles
          .map((article) => article)))) ?? [];

  const bookmarkedArticles = allArticles
    ?.filter((article) => bookmarkStorage.includes(article?.id ?? 0));

  const uniqueBookmarkedArticles = uniqBy(bookmarkedArticles, 'id');

  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex flexDir="column" p={isSmallerThan768 ? '16px' : '24px 32px'}>
      <Heading as="h1" size="md" textTransform="uppercase">
        Artikel yang disimpan
      </Heading>
      <Box h={4} />
      <Flex flexWrap="wrap" justifyContent="flex-start">
        {
        uniqueBookmarkedArticles?.map((article, index) => (
          <BookmarkArticleCard
            key={article?.id}
            index={index}
            articleId={article?.id ?? 0}
            articleURL={article?.url?.url ?? ''}
            imageURL={makeImageURL(article?.thumbnail?.hash ?? '')}
            articleTitle={article?.title ?? ''}
            publisher={article?.publisher ?? ''}
          />
        ))
      }
      </Flex>
    </Flex>
  );
}

export default BookmarkScreen;
