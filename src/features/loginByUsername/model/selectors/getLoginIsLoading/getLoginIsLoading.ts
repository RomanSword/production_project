import { StateSchema } from 'app/providers/storeProvider';

export const getLoginIsLoading = (state: StateSchema) => state?.login?.isLoading || false;
