import { StateSchema } from 'app/providers/storeProvider';

export const getCitiesError = (state: StateSchema) => state?.cities?.error || '';
