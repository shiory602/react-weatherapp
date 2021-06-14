import styled from 'styled-components';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import WeatherContextProvider from "../context/Context";

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

  return (
    // <WeatherContextProvider>
      <BrowserRouter>
        <Wrap>
          <Switch>
            {/* main */}
            <Route exact path='/'>
              <TodayLayout>
                <Header />
                <StickToday><Today /></StickToday>
              </TodayLayout>
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
    // </WeatherContextProvider>
  );
}

export default Main;



const Wrap = styled.div`
  width: 100%;
  background:#ddd url(${clearNight}) no-repeat center center;
  background-size:cover;
`
const TodayLayout = styled.div`
height: 90vh;
`

const StickToday = styled.div`
  position: fixed;
  bottom: 280px;
  left: 50px;
  margin: auto;
`

const Layout = styled.div`
  margin: 50px;
  margin-top: 0;
`


