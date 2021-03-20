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
  let studiesList = [];
  studiesList = useSelector((state)=>{
    return state;
 });
  useEffect(() => {
    //const studiesList = useSelector(state => state.studiesList);
    console.log('studiesList', studiesList);
    
}, []);
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