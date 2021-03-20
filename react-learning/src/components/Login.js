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

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator.saveStudiesData([{name:'Ganesh'}, {name:'Kumar'}]));
}, []);
const studiesList = useSelector((state)=>{
    console.log('state check', state);
    return state;
 });
    const handleSubmit = (e)=> {
    e.preventDefault();   
    console.log('check state', studiesList);     
    axios.post('https://clientonbelb.styx.threadresearch.com/api/v1/auth/sign-in', {"password":"Thread@80","username":"ramana.gulla+pltadmin@fissionlabs.com","webPortalLogIn":true}, {        
        }).then((res)=>{
        console.log(res);
        localStorage.setItem('thread-token',res.data.result.token);
        localStorage.setItem('thread-refreshToken',res.data.result.refreshToken);
        });      
        history.push('/studies');
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