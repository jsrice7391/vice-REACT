
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./pages/Articles"
import ArticlePage from "./pages/Page"
import NoMatch from "./pages/NoMatch"




const App = props =>  
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles" component={ArticlePage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  



export default App;
