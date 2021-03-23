import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from  './redux/store';

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.clientid =  654111;
  const token = localStorage.getItem('thread-token');
  if (token !=null && token != '') {
    config.headers.Authorization =  token;
  }  
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
   </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
