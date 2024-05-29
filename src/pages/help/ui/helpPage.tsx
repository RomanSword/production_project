import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/counter';

const HelpPage = (): ReactElement => {
    const { t } = useTranslation('help');

    return (
        <div>
            <Counter />
            {t('page')}
        </div>
    );
};

export default HelpPage;
