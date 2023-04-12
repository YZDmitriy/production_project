import { UserSchema, User, UserRole } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';

export {
  userActions,
  userReducer,
  type User,
  type UserSchema,
  getUserAuthData,
  getUserInited,
  UserRole,
  isUserAdmin,
  isUserManager,
  getUserRoles,
};
