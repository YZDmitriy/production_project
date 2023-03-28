import { ArticleDetailsPageSchema } from './model/types/index';
import { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
  ArticleDetailsPageAsync as ArticleDetailsPage,
  type ArticleDetailsCommentsSchema,
  type ArticleDetailsRecommendationsSchema,
  type ArticleDetailsPageSchema,
};
