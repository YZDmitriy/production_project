import { Article, ArticleView } from '../../model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} className={cls.card} />
  );

  console.log(articles);

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles && articles.length > 0 ? articles?.map(renderArticle) : null}
    </div>
  );
});
