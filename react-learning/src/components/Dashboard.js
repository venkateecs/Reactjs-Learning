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
function Dashboard({studiesId}) {
    const history = useHistory();
  let match = useRouteMatch();  
  const goToStudy = (type)=> {      
    history.push(`${match.url}/${type}`);
  }
  return(
      <div>          
        <Switch>
         <Route path={`${match.path}/:listItem`}>
          <Topic/>
        </Route> 
        <Route path={match.path}>
        <h2>This is Dashboard Screen {studiesId}</h2>
        <Button variant="primary" onClick={()=> goToStudy('report')}>report</Button>
        <Button variant="primary" onClick={()=>goToStudy('research')}>Research</Button>
        </Route>
      </Switch>
      </div>
  )
}
export default Dashboard

function Topic() {
    let { listItem } = useParams();
    return(
      <h1>{listItem}</h1>
    )
  }