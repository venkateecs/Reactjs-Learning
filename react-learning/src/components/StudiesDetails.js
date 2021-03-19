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
import Dashboard from  './Dashboard';


function StudiesDetails() {
  const history = useHistory();
  let match = useRouteMatch();
  let { studiesId } = useParams();
  const goToStudyResearch = ()=> {
    //history.push('')
    //history.push('/dashboard');
    console.log('history',history);
  }
  return(
      <div>      
      <Switch>              
        <Route path={match.path}>          
          <Dashboard studiesId={studiesId}/>
        </Route>
      </Switch>
      </div>
  )
}
export default StudiesDetails;