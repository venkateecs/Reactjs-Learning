import React, { Component, useEffect, useState } from 'react';
import {Form,Col,Button,Row,InputGroup,FormControl, Card, Container, Badge, DropdownButton, Dropdown } from 'react-bootstrap';
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
import moment from "moment";


function StudiesList() {
  const history = useHistory();
  let match = useRouteMatch();
  const dispatch = useDispatch();
  const [value,setValue]=useState('None');
  const storeData = useSelector((state)=>{
    console.log('state', state);
    return state;
 });
  const studiesDetails = (data)=>{
    history.push(`/studies/${data.studyId}`)
    //history.push(`/studies/component`)
    //console.log('data', data);
  }
  useEffect(async()=> {
    let threadTokenObject = JSON.parse(localStorage.getItem('thread-tokenObject'));
    await dispatch(actionCreator.getProfileDataAPI(threadTokenObject.id));   
  },[]);
 const showStatus = (data)=> {
   if (data.status === 'Draft') {
    return (
      <Badge variant="secondary">{data.status}</Badge> 
     )

   } else if (data.status === 'Active' || data.status === 'Complete') {
    return (
      <Badge variant="success">{data.status}</Badge> 
     )
   }   
  }  
  const statusChange = (e)=> {     
     setValue(e);
     let getStatus = e ;
     if (e === 'None') {
       getStatus = '';
     }
     dispatch(actionCreator.getStudiesDataFilterAPI(getStatus));     
  }
  return(
    <div>
      <h1>The Count is {storeData.studies.studiesList.length}</h1>
      <h1>The username is  {storeData.user.profileData.firstName}</h1>       
      <DropdownButton
      alignRight
      title={value}
      id="dropdown-menu-align-right"
      onSelect={statusChange}
        >
         <Dropdown.Item eventKey="None">None</Dropdown.Item>
         <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
         <Dropdown.Item eventKey="Draft">Draft</Dropdown.Item>
         <Dropdown.Item eventKey="Complete">Complete</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>
  <Container>
  <Row>
  {
        storeData.studies.studiesList.map((data, index) => {
          return (
            <Col>
           <Card style={{ width: '18rem',marginBottom: '2rem',cursor:'pointer' }} onClick={()=> studiesDetails(data)}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> 
                {showStatus(data)}                
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted" style={{marginTop:'10px'}}> 
                  {data.android ? (<i class="fa fa-android" style={{color:'green',fontSize:'20px'}}></i>): (null)} 
                  {data.ios ? (<i class="fa fa-apple" style={{fontSize:'20px',marginLeft:'15px'}}></i>): (null)} 
                  {data.web ? (<img  aria-hidden="true" style={{width:'25px', marginLeft:'15px'}} src="/web-icon.png"/>): (null)}                             
                </Card.Subtitle>                
                <Card.Text>
                 Created {moment(data.createdTime).format('MMM DD, YYYY')};
               </Card.Text>
              </Card.Body>
            </Card>
            </Col>    
          )
        })
      }        
  </Row>
</Container>
    </div>
  )
}
export default StudiesList;