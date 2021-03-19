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
import StudiesList from './StudiesList';
import StudiesDetails from './StudiesDetails';


function Studies() {
  let match = useRouteMatch();
  return(
      <div>          
        <Switch>
        <Route path={`${match.path}/:studiesId`}>
          <StudiesDetails/>
        </Route>
        <Route path={match.path}>
          <StudiesList/>
        </Route>
      </Switch>
      </div>
  )
}
export default Studies;