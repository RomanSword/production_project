import type { Preview } from '@storybook/react';

import i18nConfig from '../../src/shared/config/i18n';

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
        i18n: i18nConfig,
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
