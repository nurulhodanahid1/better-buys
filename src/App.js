import './App.css';
import Home from './components/Home/Home';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Admin from './components/Admin/Admin';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Deals from './components/Deals/Deals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout/Checkout';

export const UserContext = createContext();

function App() {
  const [signInUser, setSignInUser] = useState({});
  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout/:productId">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <Route path="/deals">
              <Deals></Deals>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
