import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';

export type { Profile, ProfileSchema };
export {
  profileActions,
  fetchProfileData,
  updateProfileData,
  profileReducer,
  ProfileCard,
  getProfileData,
  getProfileIsLoading,
  getProfileError,
  getProfileReadOnly,
  getProfileForm,
};
