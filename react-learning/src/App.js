
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory 
} from "react-router-dom";
import Login from  './components/Login.js';
import Dashboard from  './components/Dashboard.js';
import Studies from  './components/Studies.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "react-loader-spinner";
import { connect, useSelector, useDispatch, } from "react-redux";


function App() {
  const storeData = useSelector((state)=>{
    console.log('state', state);
    return state;
 });
  return (
    <div className="App">
      {
        storeData.user.showLoader ? (<div className="center-screen">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={50}
          width={100}        
        />
      </div>): (null)
      }      
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/studies" component={Studies}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
