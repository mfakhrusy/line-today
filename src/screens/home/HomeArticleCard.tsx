// import { StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import bookmarkIcon from 'assets/bookmark-icon.png';

const emptyJSONArrayString = '[]';

type Props = {
  index: number;
  articleURL: string;
  articleTitle: string;
  imageURL: string;
  publisher: string;
  articleId: number;
}

function HomeArticleCard({
  index,
  articleURL,
  imageURL,
  articleTitle,
  publisher,
  articleId,
}: Props) {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const [isBookmarked, setBookmark] = useState(false);
  const [isBookmarkIconShown, showBookmarkIcon] = useState(false);
  const bookmarkStorage: Array<number> = useMemo(() => JSON.parse(localStorage.getItem('bookmark') ?? emptyJSONArrayString), [articleId]);

  useEffect(() => {
    if (bookmarkStorage?.includes(articleId)) {
      showBookmarkIcon(true);
      setBookmark(true);
    }
  }, []);

  useEffect(() => {
    if (isBookmarked) {
      showBookmarkIcon(true);
    }
  }, [isBookmarked]);

  const onClickBookmark = () => {
    if (isBookmarked) {
      setBookmark(false);
      const currentBookmark: Array<number> = JSON.parse(localStorage.getItem('bookmark') ?? emptyJSONArrayString);
      const newBookmark = currentBookmark.filter((bookmark) => bookmark !== articleId);
      if (newBookmark.length === 0) {
        localStorage.removeItem('bookmark');
      } else {
        localStorage.setItem('bookmark', JSON.stringify(newBookmark));
      }
    } else {
      setBookmark(true);
      if (localStorage.getItem('bookmark') === null || localStorage.getItem('bookmark') === '') {
        localStorage.setItem('bookmark', `[${articleId}]`);
      } else {
        const currentBookmark: Array<number> = JSON.parse(localStorage.getItem('bookmark') ?? emptyJSONArrayString);
        const newBookmark = [...currentBookmark, articleId];
        localStorage.setItem('bookmark', JSON.stringify(newBookmark));
      }
    }
  };

  return (
    <Flex
      flexDir="column"
      mb={5}
      cursor="pointer"
      flex="0 0 50%"
      p={index % 2 === 0 ? '0 6px 0 0' : '0 0 0 6px'}
      pos="relative"
      onMouseEnter={() => showBookmarkIcon(true)}
      onMouseLeave={() => !isBookmarked && showBookmarkIcon(false)}
    >
      <Flex
        pos="absolute"
        top={-1}
        right={index % 2 === 0 ? '6px' : 0}
        onClick={onClickBookmark}
        display={isBookmarkIconShown ? 'flex' : 'none'}
      >
        <Image src={bookmarkIcon} height="45px" />
      </Flex>
      <Link
        href={articleURL}
      >
        <Flex w="100%" h="auto" flex="0 0 100%">
          <Image
            as="figure"
            backgroundImage={`url("${imageURL}")`}
            w="100%"
            h="100%"
            pt="56.25%"
            bgSize="cover"
            bgPos="50%"
          />
        </Flex>
        <Box h={1} />
        <Text fontSize={isSmallerThan768 ? '13px' : '15px'}>{articleTitle}</Text>
        <Box h={1} />
        <Text as="small" color="#9f9f9f" fontSize={isSmallerThan768 ? '11px' : '12px'}>{publisher}</Text>
      </Link>
    </Flex>
  );
}

export default HomeArticleCard;
