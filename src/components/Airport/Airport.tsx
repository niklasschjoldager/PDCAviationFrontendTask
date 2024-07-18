import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FiTrash2 } from 'react-icons/fi';
import { deleteAirport } from '../../api/';
import type { Airport as AirportProps } from '../../api/';
import styles from './Airport.module.scss';

function Airport({ id, iata, name }: AirportProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return deleteAirport(id);
    },

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['airports'] }),
  });

  const removeMessage = `Delete ${name}`;

  return (
    <li key={id} className={styles.airport}>
      <div className={styles.airport__content}>
        <h3>{name}</h3>
        <abbr className={styles.airport__abbreviation} title={name}>
          {iata}
        </abbr>
      </div>
      <button
        className={styles['airport__delete-button']}
        title={removeMessage}
        onClick={() => {
          mutation.mutate(id);
        }}>
        <span className="sr-only">{removeMessage}</span>
        <FiTrash2 />
      </button>
    </li>
  );
}

export default Airport;
