import { StateSchema } from 'app/providers/storeProvider';

export const getCountriesData = (state: StateSchema) => state.countries?.data || [];
