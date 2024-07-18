import { useQuery } from '@tanstack/react-query';
import { getAirports } from '../../api';
import styles from './Airports.module.scss';
import Airport from '../Airport';

function Airports() {
  const {
    isPending,
    isError,
    data: airports,
  } = useQuery({
    queryKey: ['airports'],
    queryFn: getAirports,
  });

  if (isPending) {
    return <p>Loading airports...</p>;
  }

  if (isError) {
    return <p>Whoops, an error has occured.</p>;
  }

  return (
    <ul className={styles.airports}>
      {airports.map(({ id, iata, name }) => (
        <Airport key={id} id={id} iata={iata} name={name} />
      ))}
    </ul>
  );
}

export default Airports;
