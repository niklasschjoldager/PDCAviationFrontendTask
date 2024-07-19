import { CgSpinner } from 'react-icons/cg';
import { MdErrorOutline } from 'react-icons/md';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAirports } from '../../api';
import styles from './Airports.module.scss';
import Airport from '../Airport';
import { useDebounce } from '@uidotdev/usehooks';

type AirportsProps = {
  query: string;
};

function Airports({ query }: AirportsProps) {
  const debouncedQuery = useDebounce(query, 500);

  const {
    isPending,
    isError,
    data: airports,
  } = useQuery({
    queryKey: ['airports', debouncedQuery],
    queryFn: () => getAirports(debouncedQuery),
    placeholderData: keepPreviousData,
  });

  const isNoSearchResultFound = airports?.length === 0 && query;
  const isNoAirportAdded = airports?.length === 0 && !query;

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

  if (isNoSearchResultFound) {
    return <Message>No airport matches your search for "{query}"</Message>;
  }

  if (isNoAirportAdded) {
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
