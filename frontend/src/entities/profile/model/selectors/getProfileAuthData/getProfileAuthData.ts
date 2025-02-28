import { StateSchema } from 'app/providers/storeProvider';

export const getProfileAuthData = (state: StateSchema) => state?.profile?.authData;
