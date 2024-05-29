import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/counter';

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main');

    return (
        <div>
            <Counter />
            {t('page')}
        </div>
    );
};

export default MainPage;
