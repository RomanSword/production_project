import { StateSchema } from 'app/providers/storeProvider';

export const getCountriesError = (state: StateSchema) => state?.countries?.error || '';
