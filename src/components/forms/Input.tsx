import clsx from 'clsx';
import React from 'react';

import { Modify } from '@/typings/typeHelper';

import styles from './Input.module.scss';

export type InputProps = Modify<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    Icon?: JSX.Element;
  }
>;
const Input: React.FC<InputProps> = ({ Icon, className, ...inputProps }) => {
  return (
    <div className={styles.inputBase}>
      <input type="text" className={clsx(className, styles.input)} {...inputProps} />
      {Icon && <div className={styles.iconContainer}>{Icon}</div>}
    </div>
  );
};

export default Input;
