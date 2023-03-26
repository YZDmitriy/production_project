/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlesPagesSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlePageInited(getState());

  if (!inited) {
    dispatch(articlePageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
