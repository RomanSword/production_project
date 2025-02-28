import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { getProfileIsInited } from 'entities/profile';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config';

interface IProps {
    children: ReactElement;
}

export function RequireAuth(props: IProps): ReactElement {
    const isInited = useSelector(getProfileIsInited);
    const location = useLocation();

    if (!isInited) {
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
