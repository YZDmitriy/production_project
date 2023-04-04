import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '../model/types/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
