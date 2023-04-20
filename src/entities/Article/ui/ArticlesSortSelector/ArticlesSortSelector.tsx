import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import cls from './ArticlesSortSelector.module.scss';
import { ArticlesSortField } from '../../model/consts/articleConsts';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<Array<SelectOption<ArticlesSortField>>>(
    () => [
      {
        value: ArticlesSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticlesSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticlesSortField.VIEWS,
        content: t('кол-ву просмотров'),
      },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        value={sort}
        label={t('Сортировать по')}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        value={order}
        label={t('по')}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
