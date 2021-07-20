import React , {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Fuel from './containers/Fuel';
import Profile from './containers/Profile';
import AboutUs from './containers/AboutUs';
import Dashboard from './containers/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const[isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState();
  console.log(isAuth);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='container'>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login">
              <Login auth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          <Route path="/fuel-quote" component={Fuel} auth={isAuth} userId={userId} />
          <Route path="/client-profile" component={Profile} auth={isAuth} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/dashboard" component={Dashboard} auth={isAuth} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
