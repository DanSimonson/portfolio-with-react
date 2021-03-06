/**
 *
 * This page not currently being used.
 *
 */

import React from "react";
import "./App.scss";
import Portfolio from "./Views/Portfolio";
import Blog from "./Views/Blog";
import DisplayGrid from "./Views/DisplayGrid"
import NewBlogPost from "./Views/NewBlogPost";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/NewBlogPost" component={NewBlogPost} />
          <Route exact path="/DisplayGrid" component={DisplayGrid} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
