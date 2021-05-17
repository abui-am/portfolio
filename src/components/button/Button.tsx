import { ButtonHTMLAttributes } from 'react';

import { Modify } from '@/typings/typeHelper';

import styles from './Button.module.scss';

type ButtonVariant = 'outlined' | 'primary' | 'secondary' | 'rounded';

type ThemedButtonProps<T> = Modify<
  ButtonHTMLAttributes<T>,
  {
    children: unknown;
    variant?: ButtonVariant;
    Icon?: JSX.Element;
  }
>;

const Button: React.FC<ThemedButtonProps<unknown>> = ({ children, variant = 'primary', Icon, ...props }) => {
  const getClass = (varians: ButtonVariant) => {
    switch (varians) {
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
    <button className={getClass(variant)} type="button" {...props}>
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
