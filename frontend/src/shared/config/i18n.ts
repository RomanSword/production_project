import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

function initI18n(): typeof i18n {
    i18n.use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'en',
            debug: __IS_DEV__,
            load: 'languageOnly',
            interpolation: { escapeValue: false },
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }
        });

    return i18n;
}

export { initI18n };
