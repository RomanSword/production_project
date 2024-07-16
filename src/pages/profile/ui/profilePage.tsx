import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/profile';

import {
    DynamicModuleLoader,
    ReducerList
} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = (): ReactElement => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>{t('page')}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
