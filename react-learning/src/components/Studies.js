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
import * as actionCreator from "../redux/actions";
import { connect, useSelector, useDispatch, } from "react-redux";


function Studies() {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator.getStudiesDataAPI());    
   }, []);
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