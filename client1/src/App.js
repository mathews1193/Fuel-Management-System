import React , {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Fuel from './containers/Fuel';
import Profile from './containers/Profile';
import AboutUs from './containers/aboutUs';
import Dashboard from './containers/Dashboard';
import ErrorPage from './containers/ErrorPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Note convert the rest of the route into component calls with props tomorrow !!!
// Ensure all backend function work properly!!!

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState();
  const [createData, setCreateData] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='container'>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />  
          <Route path="/about-us" component={AboutUs} />
          <Route path="/login-error" component={ErrorPage} />
          
          <Route path="/client-profile">
            <Profile isAuth={isAuth} userId={userId} setUserId={setUserId} />
          </Route>

          <Route path="/login">
             <Login isAuth={isAuth} setIsAuth={setIsAuth} setUserId={setUserId}  />
          </Route>

          <Route path="/fuel-quote">
             <Fuel isAuth={isAuth} userId={userId} />
          </Route>

          <Route path="/dashboard">
             <Dashboard isAuth={isAuth} userId={userId} />
          </Route>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
