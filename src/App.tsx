import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.scss';
import Airports from './components/Airports';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Airports />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
};

export default App;
