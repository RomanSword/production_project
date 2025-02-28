import { StateSchema } from 'app/providers/storeProvider';

export const getLoginFormData = (state: StateSchema) => state?.login?.formData;
