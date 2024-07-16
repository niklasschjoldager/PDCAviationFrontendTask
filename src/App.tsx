import React from 'react';
import './App.scss';
import { apiGetAirports } from './api';
import Airports from './components/Airports';

const App = () => {
  const data = apiGetAirports();

  return (
    <div className="App">
      <Airports />
    </div>
  );
};

export default App;
