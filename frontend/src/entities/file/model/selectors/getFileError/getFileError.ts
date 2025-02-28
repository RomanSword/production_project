import { StateSchema } from 'app/providers/storeProvider';

export const getFileError = (state: StateSchema) => state?.file?.error || '';
