import Airports from './components/Airports';
import CreateAirportForm from './components/CreateAirportForm/';
import AirportSearchField from './components/AirportSearchField';
import styles from './App.module.scss';
import { useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <header className={styles.section__header}>
          <h2>Airports</h2>
          <AirportSearchField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(event.target.value)
            }
          />
        </header>
        <div className={styles.section__content}>
          <Airports query={searchQuery} />
        </div>
      </section>
      <section className={styles.section}>
        <CreateAirportForm />
      </section>
    </main>
  );
};

export default App;
