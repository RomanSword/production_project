import { ReactElement } from 'react';

import { ProfileForm, profileReducer } from 'entities/profile';

import {
    DynamicModuleLoader,
    ReducerList
} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = (): ReactElement => {
    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfileForm />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
