import { ReactElement, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { logoutProfile, profileActions, getProfileAuthData } from 'entities/profile';

import { DropdownButton } from 'shared/ui';
import { AppRoutes, RoutePath } from 'shared/config';
import { useAppDispatch } from 'shared/lib/hooks';

const PROFILE_OPTION = 'profile_option';
const LOGOUT_OPTION = 'logout_option';

export const UserMenu = (): ReactElement => {
    const navigate = useNavigate();

    const { t } = useTranslation();
    const profileAuthData = useSelector(getProfileAuthData);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();

    const options = useMemo(
        () => [
            { id: PROFILE_OPTION, text: t('link.profile') },
            { id: LOGOUT_OPTION, text: t('logout') }
        ],
        [t]
    );

    const onDropDownOptionClick = (key: string) => {
        if (key === PROFILE_OPTION) {
            navigate(`${RoutePath[AppRoutes.PROFILE]}${profileAuthData?.id}`);
        } else if (key === LOGOUT_OPTION) {
            dispatch(profileActions.clearAuthData());
            dispatch(logoutProfile());

            navigate(RoutePath[AppRoutes.MAIN]);
        }
    };

    console.log('profileAuthData', profileAuthData);

    return (
        <DropdownButton
            buttonText={profileAuthData?.firstname ? profileAuthData.firstname : 'Username'}
            onOptionClick={onDropDownOptionClick}
            options={options}
        />
    );
};
