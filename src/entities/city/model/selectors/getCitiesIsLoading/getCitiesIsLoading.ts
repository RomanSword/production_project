import { StateSchema } from 'app/providers/storeProvider';

export const getCitiesIsLoading = (state: StateSchema) => state?.cities?.isLoading || false;
