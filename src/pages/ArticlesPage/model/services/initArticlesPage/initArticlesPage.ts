/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticlesSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlesPagesSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlePageInited(getState());

  if (!inited) {
    const orderFromURL = searchParams.get('order') as SortOrder;
    const sortFromURL = searchParams.get('sort') as ArticlesSortField;
    const searchFromURL = searchParams.get('search');

    if (orderFromURL) {
      dispatch(articlePageActions.setOrder(orderFromURL));
    }
    if (sortFromURL) {
      dispatch(articlePageActions.setSort(sortFromURL));
    }
    if (searchFromURL) {
      dispatch(articlePageActions.setSearch(searchFromURL));
    }

    dispatch(articlePageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
