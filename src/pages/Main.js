import styled from 'styled-components';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Context from '../context/Context';


/*---------------
| Images          |
----------------*/
import clearNight from '../background/clearn.jpg';

/*---------------
| Pages          |
----------------*/
import Header from './main/Header';
import Today from './main/Today';
import Footer from '../Footer';

function Main() {

  return (
    <BrowserRouter>
      <Wrap>
        <Switch>
          {/* main */}
          <Route exact path='/'>
              <Header />
              <Today />
          </Route>
          {/* detail */}
          <Route>
            <Header />
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