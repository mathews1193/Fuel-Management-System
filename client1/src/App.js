import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Fuel from './containers/Fuel';
import Profile from './containers/Profile';
import AboutUs from './containers/AboutUs'
import Dashboard from './containers/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const [token, setToken] = useState();
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='container'>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/fuel-quote" component={Fuel} />
          <Route path="/client-profile" component={Profile} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
