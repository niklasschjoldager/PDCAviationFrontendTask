import Airports from './components/Airports';
import styles from './App.module.scss';
import Button from './components/Button';

const App = () => {
  return (
    <main className={styles.container}>
      <section>
        <header>
          <h2>Airports</h2>
        </header>
        <Airports />
      </section>
      <section>
        <h2>New airport</h2>
        <Button>Save</Button>
      </section>
    </main>
  );
};

export default App;
