import { StateSchema } from 'app/providers/storeProvider';

export const getLoginValidationErrors = (state: StateSchema) =>
    state?.login?.validationErrors || {};
