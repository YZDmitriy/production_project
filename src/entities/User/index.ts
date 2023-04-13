import { UserSchema, User } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';
import { UserRole } from './model/consts/consts';

export {
  userActions,
  userReducer,
  type User,
  type UserSchema,
  getUserAuthData,
  getUserInited,
  isUserAdmin,
  isUserManager,
  getUserRoles,
  UserRole,
};
