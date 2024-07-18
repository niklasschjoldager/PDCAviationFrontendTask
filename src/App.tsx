import Airports from './components/Airports';
import styles from './App.module.scss';
import AirportForm from './components/Airport/AirportForm';

const App = () => {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <header className={styles.section__header}>
          <h2>Airports</h2>
        </header>
        <div className={styles.section__content}>
          <Airports />
        </div>
      </section>
      <section className={styles.section}>
        <AirportForm />
      </section>
    </main>
  );
};

export default App;
