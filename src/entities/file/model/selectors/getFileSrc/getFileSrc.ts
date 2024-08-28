import { StateSchema } from 'app/providers/storeProvider';

export const getFileSrc = (state: StateSchema) => state.file?.data.src || '';
