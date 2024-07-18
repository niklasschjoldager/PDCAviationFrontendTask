import { useId } from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
}

function TextInput({ id, label, ...rest }: TextInputProps) {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <div className={styles['text-input']}>
      <label htmlFor={appliedId} className={styles['text-input__label']}>
        {label}
      </label>
      <input
        id={appliedId}
        name={appliedId}
        {...rest}
        className={styles['text-input__input']}
      />
    </div>
  );
}

export default TextInput;
