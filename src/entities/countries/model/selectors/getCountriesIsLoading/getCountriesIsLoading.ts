import { StateSchema } from 'app/providers/storeProvider';

export const getCountriesIsLoading = (state: StateSchema) => state?.countries?.isLoading || false;
