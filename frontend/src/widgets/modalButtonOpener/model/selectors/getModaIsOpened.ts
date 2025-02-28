import { StateSchema } from 'app/providers/storeProvider';

export const getOpenedModals = (state: StateSchema) => state?.modal?.openedModals;
