import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button } from 'antd';


import './App.css';
import Today from './components/Today.js';
import Detail from './components/detail/Detail.js';

function App() {

  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const[city, setCity] = useState('Vancouver');

  useEffect(() => {
    setLoading(true);

    fetch(`${api.baseurl}weather?q=${city}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(`error ${error}`))
  })

  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Today />
      <Detail />
    </div>
  );
}

export default App;


// Weather API reference:  https://openweathermap.org/api/one-call-api
const api = {
	key: "c05165900889e0c017b2ee9ad3a1a515",
	baseurl: "https://api.openweathermap.org/data/2.5/", // main data
}