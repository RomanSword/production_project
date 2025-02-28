import { StateSchema } from 'app/providers/storeProvider';

export const getFileIsLoading = (state: StateSchema) => state?.file?.isLoading || false;
