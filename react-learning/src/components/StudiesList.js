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
import * as actionCreator from "../redux/actions";
import { connect, useSelector, useDispatch, } from "react-redux";


function StudiesList() {
  const history = useHistory();
  let match = useRouteMatch();
  const dispatch = useDispatch();
  const storeData = useSelector((state)=>{
    console.log('state', state);
    return state;
 });
  const studiesDetails = ()=>{
    history.push('/studies/component')
  }
  return(
      <div>
        <h1>The Count is {storeData.studies.studiesList.length}</h1>
        <h1>The username is  {storeData.user.profileData.firstName}</h1>
         <Button variant="primary" onClick={studiesDetails}>Studies Details</Button>
      </div>
  )
}
export default StudiesList;