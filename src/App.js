import React from 'react';
import './App.css';
import Portfolio from './Views/Portfolio';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;