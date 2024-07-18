import Airports from './components/Airports';
import CreateAirportForm from './components/CreateAirportForm/';
import styles from './App.module.scss';

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
        <CreateAirportForm />
      </section>
    </main>
  );
};

export default App;
