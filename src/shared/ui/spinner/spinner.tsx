import { ReactElement } from 'react';

import cls from './spinner.module.scss';

export const Spinner = (): ReactElement => {
    return <span className={cls.loader}></span>;
};
