import styled from 'styled-components';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <Wrap>
        <Switch>
          {/* main */}
          <Route exact path='/'>
              <Header />
              <StickToday><Today /></StickToday>
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


