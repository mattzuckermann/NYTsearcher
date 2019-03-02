import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";
import Nav from './components/Nav';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/articles" component={Books} />
        <Route exact path="/savedArticles" component={SavedBooks} />
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>;


export default App;
