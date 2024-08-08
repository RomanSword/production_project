import '@testing-library/jest-dom';

import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';
import { initI18nTest } from 'shared/config/i18nTest';

initI18nTest();

interface IStore {
    [USER_LOCAL_STORAGE_KEY]?: string;
}

class LocalStorageMock {
    store: IStore = {};

    length: number = 0;

    clear() {
        this.store = {};
    }

    getItem(key: keyof IStore) {
        return this.store[key] || null;
    }

    setItem(key: keyof IStore, value: string) {
        this.store[key] = value;
    }

    removeItem(key: keyof IStore) {
        delete this.store[key];
    }

    key(index: number): string | null {
        const keys = Object.keys(this.store);

        if (keys.length <= index) {
            return keys[index];
        }

        return null;
    }
}

global.localStorage = new LocalStorageMock();
