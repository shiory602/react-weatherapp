import styled from 'styled-components';
import React from 'react';
import Context from '../context/Context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/*---------------
| Pages          |
----------------*/
import Header from './main/Header';
import Today from './main/Today';
import Footer from '../Footer';

function Main() {

  return (
    <BrowserRouter>
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
      
      
      <Wrap>
      </Wrap>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;



const Wrap = styled.div`
	background-image: linear-gradient(to bottom, rgba(250, 250, 250, 0), rgba(250, 250, 250, 0.6));
`