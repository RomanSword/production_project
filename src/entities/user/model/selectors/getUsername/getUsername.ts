import { StateSchema } from 'app/providers/storeProvider';

export const getUsername = (state: StateSchema) => state.user?.authData.username || '';
