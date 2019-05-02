import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './pages/Articles';
import SavedArticles from './pages/SavedArticles';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Recommendation from './pages/Recommendation';
import Login from './pages/Login';
import Register from './pages/Register';
import Comments from './pages/Comments';

class App extends Component {
  state = {
    loggedin: '',
  };

  componentDidMount() {
    this.updateLogin(this);
  }

  updateLogin(scope) {
    scope.setState({ loggedin: localStorage.getItem('jwtToken') !== null });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav loggedin={this.state.loggedin} />

          <Switch>
            {/* <Route exact path="/" component={Articles} /> */}
            <Route exact path="/search" component={Articles} />
            <Route exact path="/articles" component={SavedArticles} />
            <Route exact path="/recommendation" component={Recommendation} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} parent={this} updateLogin={this.updateLogin} />}
            />
            <Route exact path="/:id" component={Comments} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
