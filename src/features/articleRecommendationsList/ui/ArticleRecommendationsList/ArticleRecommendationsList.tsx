import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsListApi';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    // хук из RTKQuery для получения данных
    const {
      data: articles,
      isLoading,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        data-testid={'ArticleRecommendationsList'}
      >
        <Text size={TextSize.L} title={t('Рекомендуем')} />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    );
  }
);
