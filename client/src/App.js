import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './pages/Articles';
import SavedArticles from './pages/SavedArticles';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Recommendation from './pages/Recommendation';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Comments from "./pages/Comments"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        
        <Route exact path="/(|articles)" component={Articles} />
        <Route exact path="/savedArticles" component={SavedArticles} />
        <Route exact path="/savedArticles/:id" component={Comments} />
        <Route exact path="/recommendation" component={Recommendation} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
