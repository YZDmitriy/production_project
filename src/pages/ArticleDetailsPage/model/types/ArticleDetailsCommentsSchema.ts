import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
// import { Comment } from '../model/types/comment';
// import { Comment } from '../../model/types/';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
