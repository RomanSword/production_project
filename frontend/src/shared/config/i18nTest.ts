import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function initI18nTest(): typeof i18n {
    i18n.use(initReactI18next).init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources: { ru: { translations: {} } }
    });

    return i18n;
}

export { initI18nTest };
