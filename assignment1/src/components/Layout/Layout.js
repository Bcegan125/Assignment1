import React, { useCallback, useState } from "react";
import {Container} from 'semantic-ui-react';
import './Layout.css';

import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import PokePlug from '../../containers/PokePlug/PokePlug';
import YourOrders from '../../containers/YourOrders/YourOrders';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';
import OrderSuccess from '../../containers/PlaceOrder/OrderSuccess/OrderSuccess';
import YourAccount from "../../containers/YourAccount/YourAccount";
import AccountUpdate from "../../containers/YourAccount/AccountUpdate/AccountUpdate";
import Authenticate from "../../containers/Authenticate/Authenticate";
import AuthContext from "../../context/auth-context";
import axios from '../../axios-orders'

const Layout = (props) => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token
      })
    );
  }, []);

  const logout = () => {
    
    alert("You have logged out!");
  }
 
 
  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout,
    }}
  >
      <Container>
        <Nav />

        <Route path="/" exact component={PokePlug} />
        <Route path="/authenticate" component={Authenticate} />
        <Route path="/orders" component={YourOrders} />
        <Route path="/place-order" component={PlaceOrder} />
        <Route path="/order-success" component={OrderSuccess} />
        <Route path="/users/:uid" component={YourAccount} />
        <Route path="/update-account" component={AccountUpdate} />

      </Container>
    </AuthContext.Provider>
  )
};

export default Layout;