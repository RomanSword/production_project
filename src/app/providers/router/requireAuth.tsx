import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { getUsername } from 'entities/user';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config';

interface IProps {
    children: ReactElement;
}

export function RequireAuth(props: IProps): ReactElement {
    const auth = useSelector(getUsername);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate
                to={RoutePath.main}
                state={{ from: location }}
                replace
            />
        );
    }

    return props.children;
}
