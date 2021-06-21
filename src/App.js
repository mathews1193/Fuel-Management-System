import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import Fuel from './containers/Fuel';
import Profile from './containers/Client-Profile/Profile';
import Dashboard from './containers/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';

function App() {
  const title = "";
  return (
    <div className="App">
      <Router>
        <NavBar title={title}/>
      <div className='container'>
              <Route exact path="/" title={"Home"} component={Home} />
              <Route path="/signup"component={SignUp} title={"Sign Up"}/>
              <Route path="/login"component={Login} />
              <Route path="/fuel-quote" title={"Fuel Quote Form"} component={Fuel} />
              <Route path="/client-profile"component={Profile} />
              <Route path="/dashboard"component={Dashboard} />
        </div>
      </Router>
    </div>
  );
}

export default App;
