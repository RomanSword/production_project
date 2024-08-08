import { ReactElement, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUsername, userActions } from 'entities/user';
import { DropdownButton } from 'shared/ui';
import { AppRoutes, RoutePath } from 'shared/config';

const PROFILE_OPTION = 'profile_option';
const LOGOUT_OPTION = 'logout_option';

export const UserMenu = (): ReactElement => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const username = useSelector(getUsername);

    const dispatch = useDispatch();

    const options = useMemo(
        () => [
            { id: PROFILE_OPTION, text: t('link.profile') },
            { id: LOGOUT_OPTION, text: t('logout') }
        ],
        [t]
    );

    const onDropDownOptionClick = (key: string) => {
        if (key === PROFILE_OPTION) {
            navigate(RoutePath[AppRoutes.PROFILE]);
        } else if (key === LOGOUT_OPTION) {
            dispatch(userActions.clear());
            navigate(RoutePath[AppRoutes.MAIN]);
        }
    };

    return (
        <DropdownButton
            buttonText={username ? username : 'username'}
            onOptionClick={onDropDownOptionClick}
            options={options}
        />
    );
};
