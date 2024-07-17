import { FiTrash2 } from 'react-icons/fi';
import type { Airport as AirportProps } from '../../api/';
import styles from './Airport.module.scss';

function Airport({ id, iata, name }: AirportProps) {
  const removeMessage = `Remove ${name}`;

  return (
    <li key={id} className={styles.airport}>
      <div className={styles.airport__content}>
        <h3>{name}</h3>
        <abbr className={styles.airport__abbreviation} title={name}>
          {iata}
        </abbr>
      </div>
      <button
        className={styles['airport__remove-button']}
        title={removeMessage}>
        <span className="sr-only">{removeMessage}</span>
        <FiTrash2 />
      </button>
    </li>
  );
}

export default Airport;
