import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  async () =>
    await new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      setTimeout(() => {
        resolve(import('./AddCommentForm'));
      }, 1500);
    })
);
