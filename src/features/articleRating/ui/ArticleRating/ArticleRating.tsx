import { RatingCard } from '@/entities/Rating';
import {
  useGetArticleRating,
  useRateArticle,
} from '../../api/articleRatingApi';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        // handle error
        console.log(error);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width={'100%'} height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      rate={rating?.rate}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте отзыв о статье')}
      hasFeedback
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
    ></RatingCard>
  );
});

export default ArticleRating;
