import { useQuery } from 'react-query';

type ArticleThumbnail = {
  hash: string;
}

type ArticleURL = {
  url: string;
}

export type Article = {
  publisher?: string;
  publisherImageCdnHash?: string;
  thumbnail?: ArticleThumbnail;
  title?: string;
  url?: ArticleURL;
  id: number;
};

export type Section = {
  articles: Array<Article>
};

type Template = {
  title?: string;
  sections?: Array<Section>;
  type: 50 | 56 | 59 | number;
}

type Category = {
  name: string;
  id: number;
  templates: Array<Template>;
}

export type GetHomeQueryResult = {
  categories: Array<Category>;
  categoryList: any;
}

type GetHomeQuery = {
  result: GetHomeQueryResult;
};

export const getHomeQuery = () => useQuery<GetHomeQuery>({
  queryKey: 'homeData',
  queryFn: () => fetch(
    '/id/portaljson',
  ).then((res) => res.json()),
});
