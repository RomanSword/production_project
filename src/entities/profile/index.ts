export type { Profile, ProfileSchema } from './model/types/profile';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export { ProfileFormAsync as ProfileForm } from './ui/profileForm/profileForm.async';
