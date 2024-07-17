import Airports from './components/Airports';
import styles from './App.module.scss';

const App = () => {
  return (
    <main className={styles.container}>
      <h2>Airports</h2>
      <Airports />
    </main>
  );
};

export default App;
