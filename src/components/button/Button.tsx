import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export type Modify<T, R> = Omit<T, keyof R> & R;

type ButtonVariant = 'outlined' | 'primary' | 'secondary';

type ThemedButtonProps<T> = Modify<
  ButtonHTMLAttributes<T>,
  {
    children: any;
    variant?: ButtonVariant;
  }
>;

const Button: React.FC<ThemedButtonProps<any>> = ({ children, variant = 'primary', ...props }) => {
  const getClass = (variant: ButtonVariant) => {
    switch (variant) {
      case 'primary':
        return styles.button;

      case 'secondary':
        return styles.secondaryButton;

      case 'outlined':
        return styles.outlinedButton;
    }
  };
  return (
    <button className={getClass(variant)} {...props}>
      {children}
    </button>
  );
};

export default Button;
