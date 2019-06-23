import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './pages/Articles';
import SavedArticles from './pages/SavedArticles';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Recommendation from './pages/Recommendation';
import Login from './pages/Login';
import Register from './pages/Register';
import Comments from './pages/Comments';

const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [mounting, setMounting] = useState(false);

  useEffect(() => {
    setLoggedin(localStorage.getItem('jwtToken') !== null);
    setMounting(true);
  });

  const fade = useSpring({
    opacity: mounting ? 1 : 0,
  });

  return (
    <Router>
      <div>
        <animated.div>
          <Nav loggedin={loggedin} />
        </animated.div>
        <animated.div style={fade}>
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route exact path="/search" component={Articles} />
            <Route exact path="/articles" component={SavedArticles} />
            <Route exact path="/recommendation" component={Recommendation} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} /*parent={this}*/ setLoggedin={setLoggedin} />}
            />
            <Route exact path="/:id" component={Comments} />
            <Route component={NoMatch} />
          </Switch>
        </animated.div>
      </div>
    </Router>
  );
};

export default App;
