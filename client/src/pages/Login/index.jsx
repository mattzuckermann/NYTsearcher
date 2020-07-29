import React, { useState, useEffect } from 'react';
import './../../components/Login/Login.css';
import API from '../../utils/API';
import Jumbotron from '../../components/Jumbotron';
import { H1, H2 } from '../../components/Headings';
import { Container, Row, Col } from '../../components/Grid';
import { Panel, PanelBody } from '../../components/Panel';
import { Form, Input, FormGroup, Label } from '../../components/Form';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('jwtToken') !== null) {
      props.history.push('/');
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    API.loginUser(username, password)
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('user', username);
        props.setLoggedin(true);
        setMessage('');
      })
      .then(() => {
        props.history.push('/search');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setMessage('Login failed. Username or password not match');
        }
      });
    setUsername('');
    setPassword('');
    setMessage('');
  };

  return (
    <Container fluid>
      <Row>
        <Col size="sm-10" offset="sm-1">
          <Jumbotron>
            <H1 className="text-center">Welcome to NYT Searcher!</H1>
            <hr style={{ width: '60%' }} />
          </Jumbotron>
          <Panel>
            <PanelBody>
              <Form className="form-signin" style={{ marginBottom: '30px' }}>
                {message !== '' && (
                  <div className="alert alert-warning alert-dismissible" role="alert">
                    {message}
                  </div>
                )}

                <H2 className="form-signin-heading">Please sign in</H2>

                <FormGroup>
                  <Label htmlFor="inputUsername" className="sr-only">
                    Username
                  </Label>
                  <Input
                    type="Username"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="inputPassword" className="sr-only">
                    Password
                  </Label>
                  <Input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>

                <button
                  disabled={!username || !password}
                  className="btn btn-lg btn-primary btn-block buttonMediaQuery"
                  onClick={onSubmit}
                  type="info"
                >
                  Login
                </button>

                <p>
                  Not a member?{' '}
                  <Link to="/register">
                    <span className="glyphicon glyphicon-plus-sign" aria-hidden="true" /> Register
                    here
                  </Link>
                </p>
              </Form>
            </PanelBody>
          </Panel>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
