import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export type Modify<T, R> = Omit<T, keyof R> & R;

type ButtonVariant = 'outlined' | 'primary' | 'secondary' | 'rounded';

type ThemedButtonProps<T> = Modify<
  ButtonHTMLAttributes<T>,
  {
    children: any;
    variant?: ButtonVariant;
    Icon?: any;
  }
>;

const Button: React.FC<ThemedButtonProps<any>> = ({ children, variant = 'primary', Icon, ...props }) => {
  const getClass = (variant: ButtonVariant) => {
    switch (variant) {
      case 'primary':
        return styles.button;

      case 'secondary':
        return styles.secondaryButton;

      case 'outlined':
        return styles.outlinedButton;

      case 'rounded':
        return styles.roundedButton;

      default:
        return styles.button;
    }
  };
  return (
    <button className={getClass(variant)} {...props}>
      {Icon ? (
        <>
          <div style={{ flex: '1 1', whiteSpace: 'nowrap' }}>{children}</div>
          <div style={{ marginLeft: 8, flex: '1 1' }}>{Icon}</div>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
