import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui';
import { classNames } from 'shared/lib';

import cls from './languageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps): ReactElement => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            data-testid='language-switcher'
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames([cls.button, className])}
        >
            {t('switcher.language')}
        </Button>
    );
};
