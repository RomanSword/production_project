import type { Preview } from '@storybook/react';

import { initI18n } from '../../src/shared/config/i18n';

import '../../src/app/styles/index.scss';

const preview: Preview = {
    globals: {
        locale: 'en',
        locales: {
            ru: 'Русский',
            en: 'English'
        }
    },
    parameters: {
        i18n: initI18n(),
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Переводы',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'ru', title: 'Русский' },
                { value: 'en', title: 'English' }
            ],
            showName: true
        }
    }
};
