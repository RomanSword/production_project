import { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

import { AppLink, AppLinkTheme } from 'shared/ui';
import ForwardIcon from 'shared/assets/icons/forward.svg';
import FileIcon from 'shared/assets/icons/file.svg';
import QuestionIcon from 'shared/assets/icons/question.svg';

import cls from './sideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps): ReactElement => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onClickTest = (): void => {
        setCollapsed(prevValue => !prevValue);
    };

    return (
        <div
            data-testid='sideBar'
            className={classNames([cls.sideBar, className, collapsed && cls.collapsed])}
        >
            <div className={cls.links}>
                <AppLink
                    to='/'
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <FileIcon />
                    <span className={cls.linkText}>{t('link.main')}</span>
                </AppLink>
                <AppLink
                    to='/help'
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <QuestionIcon />
                    <span className={cls.linkText}>{t('link.help')}</span>
                </AppLink>
            </div>
            <div className={cls.buttons}>
                <Button
                    data-testid='sideBar-toggle'
                    onClick={onClickTest}
                    className={classNames([
                        cls.toggleButton,
                        collapsed && cls.toggleButtonIconInverted
                    ])}
                >
                    <ForwardIcon />
                </Button>
            </div>
        </div>
    );
};
