import React, { Component, useEffect } from 'react';
import {Form,Col,Button,Row,InputGroup,FormControl} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory 
} from "react-router-dom";


function StudiesList() {
  const history = useHistory();
  let match = useRouteMatch();
  const studiesDetails = ()=>{
    history.push('/studies/component')
  }
  return(
      <div>
         <Button variant="primary" onClick={studiesDetails}>Studies Details</Button>
      </div>
  )
}
export default StudiesList;