import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import Fuel from './containers/Fuel';
import Profile from './containers/Client-Profile/Profile';
import Dashboard from './containers/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='container'>
          <Route exact path="/" component={Home} />
          <Route path="/signup"component={SignUp} />
          <Route path="/login"component={Login} />
          <Route path="/fuel-quote"component={Fuel} />
          <Route path="/client-profile"component={Profile} />
          <Route path="/dashboard"component={Dashboard} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
