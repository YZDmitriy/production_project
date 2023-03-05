import { TestAsyncThunk } from './../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

// первый вариант текстов 36 урока
// describe('loginByUsername.test', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test('success login', async () => {
//     const userValue = { username: 'John', id: '1' };

//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

//     const action = loginByUsername({ username: 'John', password: '123' });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(result.payload).toEqual(userValue)
//   });

//   test('error login', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

//     const action = loginByUsername({ username: 'John', password: '123' });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(result.payload).toEqual('error')
//   });
// });

// второй вариант 36 урока. использование внешней функции
describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userValue = { username: 'John', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'John', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'John', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
