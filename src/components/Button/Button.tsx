import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className: string;
}

function Button({ children, className = '', ...rest }: ButtonProps) {
  const buttonClassName = `${styles.button} ${className}`;

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
