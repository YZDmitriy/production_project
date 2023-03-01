import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: userReducer,
    loginForm: loginReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
