import { CgSpinner } from 'react-icons/cg';
import { MdErrorOutline } from 'react-icons/md';
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

  if (isError) {
    return (
      <Message>
        <MdErrorOutline /> Whoops, an error has occured.
      </Message>
    );
  }

  if (isPending) {
    return (
      <Message>
        <CgSpinner /> Loading airports...
      </Message>
    );
  }

  if (airports?.length === 0) {
    return <Message>No airports added.</Message>;
  }

  return (
    <ul>
      {airports?.map(({ id, iata, name }) => (
        <Airport key={id} id={id} iata={iata} name={name} />
      ))}
    </ul>
  );
}

type MessageProps = {
  children: React.ReactNode;
};

function Message({ children }: MessageProps) {
  return <p className={styles.message}>{children}</p>;
}

export default Airports;
