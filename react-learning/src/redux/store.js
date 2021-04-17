import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import Axios from 'axios';
import * as actionCreator from "./actions";
import {  useHistory } from "react-router-dom";

const store = createStore(
    rootReducer, applyMiddleware(thunk)
);


const interceptor = (store) => { Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.clientid =  654111;
    const token = localStorage.getItem('thread-token');
    if (token !=null && token != '') {
      config.headers.Authorization =  token;
    }
    store.dispatch(actionCreator.showLoader(true));
    return config;
  }, function (error) {
    // Do something with request error
    store.dispatch(actionCreator.showLoader(false));
    return Promise.reject(error);
  });

  Axios.interceptors.response.use(
    (next) => {
        store.dispatch(actionCreator.showLoader(false));
        return Promise.resolve(next);
    },
    (error) => {      
        // You can handle error here and trigger warning message without get in the code inside
        store.dispatch(actionCreator.showLoader(false));
        console.log('error.response.status', error.response.status);
        if (error.response.status === 401) {
          window.location = '/';
        }
        return Promise.reject(error);        
    }
);
}
interceptor(store);
export default store;