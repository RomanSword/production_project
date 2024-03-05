import { ReactElement } from 'react';

import styles from './spinner.module.scss';

export const Spinner = (): ReactElement => {
    return <span className={styles.loader}></span>;
};
