import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { Article } from './model/types/article';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { getArticleDetailsData } from './model/selectors/articleDetails';

export {
  ArticleDetails,
  type Article,
  type ArticleDetailsSchema,
  getArticleDetailsData,
};
