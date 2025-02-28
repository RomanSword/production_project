import { StateSchema } from 'app/providers/storeProvider';

export const getProfileIsInited = (state: StateSchema) => state.profile?.isInited || false;
