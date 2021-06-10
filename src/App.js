import './App.css';
import Today from './Today.js';
import Detail from './Detail.js';
import Hourly from './Hourly.js';
import { useState } from 'react';

function App() {

  const [weather, setWeather] = useState([]);

  return (
    <div className="App">
      <Today />
      <Detail />
      <Hourly />
    </div>
  );
}

export default App;
