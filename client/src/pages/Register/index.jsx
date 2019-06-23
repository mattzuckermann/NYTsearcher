import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { H1, H2 } from '../../components/Headings';
import { Container, Row, Col } from '../../components/Grid';
import { Form, Input, FormGroup, Label } from '../../components/Form';
import { Panel, PanelBody } from '../../components/Panel';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import './../../components/Login/Login.css';

const Register = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (localStorage.getItem('jwtToken') !== null) {
      props.history.push('/');
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    API.registerUser(username, password).then(() => {
      props.history.push('/login');
    });
    setUsername('');
    setPassword('');
  };

  return (
    <Container fluid>
      <Row>
        <Col size="sm-10" offset="sm-1">
          <Jumbotron>
            <H1 className="text-center">Welcome to Best Seller Searcher!</H1>
            <hr style={{ width: '60%' }} />
          </Jumbotron>
          <Panel>
            <PanelBody>
              <Form className="form-signin" style={{ marginBottom: '30px' }}>
                <H2 className="form-signin-heading">Register</H2>

                <FormGroup>
                  <Label htmlFor="inputEmail" className="sr-only">
                    Username
                  </Label>
                  <Input
                    type="email"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={e => {
                      setUsername(e.target.value);
                    }}
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
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </FormGroup>

                <button
                  disabled={!username || !password}
                  className="btn btn-lg btn-primary btn-block buttonMediaQuery"
                  onClick={onSubmit}
                  type="info"
                >
                  Register
                </button>

                <p>
                  Already a member?{' '}
                  <Link to="/login">
                    <span className="glyphicon glyphicon-plus-sign" aria-hidden="true" /> Login here
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

export default Register;
