
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./pages/Articles"
import ArticlePage from "./pages/Page"
import NoMatch from "./pages/NoMatch"
import API from "./utils/api.js";




const App = props =>  
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/books" component={Articles} />
        <Route exact path="/books/:id" component={ArticlePage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  



export default App;
