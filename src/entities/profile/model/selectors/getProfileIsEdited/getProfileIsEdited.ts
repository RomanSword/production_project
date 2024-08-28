import { StateSchema } from 'app/providers/storeProvider';

export const getProfileIsEdited = (state: StateSchema) => state?.profile?.isEdited || false;
