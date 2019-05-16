import React from 'react';
import './App.scss';
import Portfolio from './Views/Portfolio';
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div> 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App;