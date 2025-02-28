import { StateSchema } from 'app/providers/storeProvider';

export const getProfileFormData = (state: StateSchema) => state?.profile?.formData || {};
