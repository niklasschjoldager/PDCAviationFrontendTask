import styles from './AirportSearchField.module.scss';

interface AirportSearchFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function AirportSearchField({ onChange }: AirportSearchFieldProps) {
  return (
    <input
      className={styles['search-field']}
      type="text"
      placeholder="Search"
      onChange={onChange}
    />
  );
}

export default AirportSearchField;
