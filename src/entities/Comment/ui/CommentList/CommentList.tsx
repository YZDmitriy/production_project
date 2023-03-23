import { Comment } from '../../model/types/comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;

  const { t } = useTranslation();

  if (isLoading) {
    <div className={classNames(cls.CommentList, {}, [className])}>
      <CommentCard isLoading />
      <CommentCard isLoading />
      <CommentCard isLoading />
    </div>;
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment, i) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            key={i}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('Комментариев нет')} />
      )}
    </div>
  );
});