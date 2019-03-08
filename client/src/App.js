import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";
import Nav from './components/Nav';
import Recommendation from "./pages/Recommendation";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/savedBooks" component={SavedBooks} />
        <Route exact path="/recommendation" component={Recommendation} />
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>;


export default App;
