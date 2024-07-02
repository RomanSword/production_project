import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = (): ReactElement => {
    const { t } = useTranslation('profile');

    return <div>{t('page')}</div>;
};

export default ProfilePage;
