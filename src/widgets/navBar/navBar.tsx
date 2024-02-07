import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';

import cls from './navBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({
    className
}: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames([cls.navBar, className])}>
            <div className={cls.links}>
                <AppLink
                    to='/'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('link.main')}
                </AppLink>
                <AppLink
                    to='/help'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('link.help')}
                </AppLink>
            </div>
        </div>
    );
}
