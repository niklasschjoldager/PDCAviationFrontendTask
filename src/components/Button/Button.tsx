import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
