import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';

export type { Profile, ProfileSchema };
export { profileActions, profileReducer, fetchProfileData, ProfileCard };
