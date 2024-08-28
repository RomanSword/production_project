import { StateSchema } from 'app/providers/storeProvider';

export const getCitiesData = (state: StateSchema) => state.cities?.data || [];
