import React from "react";
import "./App.scss";
import Portfolio from "./Views/Portfolio";
import Blog from "./Views/Blog";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/Blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
