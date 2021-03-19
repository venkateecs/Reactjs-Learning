
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


function App() {
  return (
    <div className="App">
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
