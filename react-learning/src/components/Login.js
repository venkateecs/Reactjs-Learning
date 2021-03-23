import React, { Component, useEffect } from 'react';
import {Form,Col,Button,Row,InputGroup,FormControl} from 'react-bootstrap';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory 
  } from "react-router-dom";
import * as actionCreator from "../redux/actions";
import { connect, useSelector, useDispatch, } from "react-redux";
import jwtDecode from 'jwt-decode';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionCreator.saveStudiesData([{ name: 'Ganesh' }, { name: 'Kumar' }]));
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.removeItem('thread-token');
        let loginData = await actionCreator.loginAPI({ "password": "Thread@80", "username": "ramana.gulla+pltadmin@fissionlabs.com", "webPortalLogIn": true });
        if (loginData.statusCode === 200) {
            const tokenObj = jwtDecode(loginData.result.token);
            let profileData = await dispatch(actionCreator.getProfileDataAPI(tokenObj.id));
            localStorage.setItem('thread-token', loginData.result.token);
            localStorage.setItem('thread-refreshToken', loginData.result.refreshToken);
            history.push('/studies');
        }
    }
  return(
      <div>
          <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                      Email 
    </Form.Label>
                  <Col sm="4">
                      <Form.Control type="text"/>
                  </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                      Password
    </Form.Label>
                  <Col sm="4">
                      <Form.Control type="password" placeholder="Password" />
                  </Col>
              </Form.Group>
              <Form.Group as={Row}>
        <Col sm={{ span: 4, offset: 2 }}>
          <Button type="submit">Sign In</Button>
        </Col>
      </Form.Group>
          </Form>
      </div>
  )
}
export default Login