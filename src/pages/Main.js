import styled from 'styled-components';
// import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";

/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

/*---------------
| Images          |
----------------*/
import clearNight from '../background/clearn.jpg';

/*---------------
| Pages          |
----------------*/
import Header from './main/Header';
import Today from './main/Today';
import Dheader from './detail/Dheader';
import Hourly from './detail/Hourly';
import Weekly from './detail/Weekly';
import Forecast from './detail/Forecast';
import Footer from '../Footer';

function Main() {


  // Initialize state
  const [currentWeather, setCurrentWeather] = useState([]);
  const [oneCall, setOneCall] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const[city, setCity] = useState('Vancouver');
  const[lon, setLon] = useState('-123.1193');
  const[lat, setLat] = useState('49.2497');
  const[dt, setDt] = useState('1623554321');

  function changeCity(cityName, lon, lat, dt) {
      setCity(cityName);
      setLon(lon);
      setLat(lat);
      setDt(dt);
  }

// Fetch data
  useEffect(() => {
      /*--------------------------------------
      Weather API reference:
      https://openweathermap.org/api/one-call-api
      ---------------------------------------*/
      const api = {
          key: "c05165900889e0c017b2ee9ad3a1a515",
          baseurl: "https://api.openweathermap.org/data/2.5/"
      }
      setIsLoading(true);
  
      fetch(`${api.baseurl}weather?q=${city}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(data => setCurrentWeather(data))
      .catch(error => console.log(`error ${error}`))

      console.log(currentWeather);
      
      fetch(`${api.baseurl}onecall?lat=${lat}&lon=${lon}&date=${dt}&exclude=current&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(data => setOneCall(data))
      .catch(error => console.log(`error ${error}`))

      console.log(oneCall);

    }, [city])


  return (
    <BrowserRouter>
      <Wrap>
        <Switch>
          {/* main */}
          <Route exact path='/'>
              <Header />
              <StickToday><Today currentWeather={currentWeather} /></StickToday>
          </Route>
          {/* detail */}
          <Route path='/Detail'>
            <Layout>
              <Row>
                <Col span={6}><Today /></Col>
                <Col span={18}><Dheader /></Col>
              </Row>
              <Hourly />
              <Weekly />
              <Forecast />
            </Layout>
          </Route>
        </Switch>
      </Wrap>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;



const Wrap = styled.div`
  width: 100%;
  height: 760px;
  background:#ddd url(${clearNight}) no-repeat center center;
  background-size:cover;
`

const StickToday = styled.div`
  width: 400px;
  height: 400px;
  position: fixed;
  bottom: 50px;
  left: 50px;
  margin: auto;
  text-align: center;
  /* background-color: pink; */
`

const Layout = styled.div`
  margin: 50px;
  margin-top: 0;
`


