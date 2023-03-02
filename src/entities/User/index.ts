import { UserSchema, User } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
  userActions,
  userReducer,
  type User,
  type UserSchema,
  getUserAuthData,
};
