import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPagesSlice';
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticleList } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);

  if (error) {
    return <Text text={t('Ошибка при загрузке статей')} />;
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
});
