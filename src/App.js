import logo from './logo.svg';
import './App.css';
import Home from './componand/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './componand/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './componand/PrivateRoute/PrivateRoute';
import Destination from './componand/Destination/Destination';
import Header from './componand/Header/Header';
import Booking from './componand/Booking/Booking';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Header></Header>
        <Switch><Route exact path="/">
          <Home />
        </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination/:vehicle">
            <Destination />
          </PrivateRoute>
          <Route path='/destination'>
          <Login></Login>
          </Route>
          <Route path='/booking'>
            <Booking></Booking>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
