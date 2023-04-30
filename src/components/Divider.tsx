import clsx from 'clsx';
import React from 'react';

import styles from './Divider.module.css';

type DividerProps = {
    spacer?: number;
};
const Divider = ({ spacer }: DividerProps): React.ReactElement => (
    <div
        className={clsx(styles.divider)}
        style={{ margin: `${spacer}rem` }}
    />
);
export default Divider;