import { useQuery } from '@tanstack/react-query';
import { getAirports } from '../../api';

function Airports() {
  const { isPending, isError, data } = useQuery({
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
    <>
      <h2>Airports</h2>
      <ul>
        {data.map((airport) => {
          return <li>{airport.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Airports;
