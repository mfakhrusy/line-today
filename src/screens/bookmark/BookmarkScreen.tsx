import {
  Box,
  Flex,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import { uniqBy } from 'lodash';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BookmarkAlertDialog from 'screens/bookmark/BookmarkAlertDialog';
import BookmarkArticleCard from 'screens/bookmark/BookmarkArticleCard';
import { getHomeQuery } from 'api/home/getHomeQuery';
import { makeImageURL } from 'api/makeImageURL';

type ArticleToBeRemoved = {
  title: string;
  id: number;
};

function BookmarkScreen() {
  const bookmarkStorage: Array<number> = useMemo(() => JSON.parse(localStorage.getItem('bookmark') ?? '[]'), []);
  const [articleToBeRemoved, setArticleToBeRemoved] = useState<ArticleToBeRemoved | null>(null);
  const ref = useRef();

  const data = getHomeQuery();
  const allArticles = data.data?.result.categories
    .flatMap((category) => category.templates
      .flatMap((template) => template.sections
        ?.flatMap((section) => section.articles
          .map((article) => article)))) ?? [];

  const bookmarkedArticles = allArticles
    ?.filter((article) => bookmarkStorage.includes(article?.id ?? 0));

  const uniqueBookmarkedArticles = uniqBy(bookmarkedArticles, 'id');

  const [bookmarkStorageState, setBookmarkStorageState] = useState(uniqueBookmarkedArticles);

  useEffect(() => {
    if (uniqueBookmarkedArticles.length > 0 && bookmarkStorageState.length === 0) {
      setBookmarkStorageState(uniqueBookmarkedArticles);
    }
  }, [uniqueBookmarkedArticles.length]);

  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  const onRemoveBookmark = (articleId: number, articleTitle: string) => {
    setArticleToBeRemoved({ title: articleTitle, id: articleId });
  };

  const onConfirmRemove = () => {
    const articleId = articleToBeRemoved?.id ?? 0;
    const newBookmarkStorageState = bookmarkStorageState
      .filter((article) => article?.id !== articleId);
    setBookmarkStorageState(newBookmarkStorageState);

    setArticleToBeRemoved(null);
  };

  return (
    <Flex flexDir="column" p={isSmallerThan768 ? '16px' : '24px 32px'}>
      <Heading as="h1" size="md" textTransform="uppercase">
        Artikel yang disimpan
      </Heading>
      <Box h={4} />
      <Flex flexWrap="wrap" justifyContent="flex-start">
        {
        bookmarkStorageState?.map((article, index) => (
          <BookmarkArticleCard
            key={article?.id}
            index={index}
            articleId={article?.id ?? 0}
            articleURL={article?.url?.url ?? ''}
            imageURL={makeImageURL(article?.thumbnail?.hash ?? '')}
            articleTitle={article?.title ?? ''}
            publisher={article?.publisher ?? ''}
            onRemoveBookmark={onRemoveBookmark}
          />
        ))
      }
      </Flex>
      <BookmarkAlertDialog
        leastDestructiveRef={ref}
        isOpen={articleToBeRemoved !== null}
        onClose={() => setArticleToBeRemoved(null)}
        articleTitle={articleToBeRemoved?.title ?? ''}
        onConfirm={() => onConfirmRemove()}
      />
    </Flex>
  );
}

export default BookmarkScreen;
