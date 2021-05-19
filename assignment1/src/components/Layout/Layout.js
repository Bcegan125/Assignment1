import React, { useCallback, useState, useEffect } from "react";
import { Route, Switch, useHistory,  } from "react-router-dom";
import {Container} from 'semantic-ui-react';
import './Layout.css';
import Nav from '../Nav/Nav';
import PokePlug from "../../containers/PokePlug/PokePlug";
import YourOrders from "../../containers/YourOrders/YourOrders";
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';
import OrderSuccess from '../../containers/PlaceOrder/OrderSuccess/OrderSuccess';
import YourAccount from "../../containers/YourAccount/YourAccount";
import AccountUpdate from "../../containers/YourAccount/AccountUpdate/AccountUpdate";
import Authenticate from "../../containers/Authenticate/Authenticate";
import AuthContext from "../../context/auth-context";

let logoutTimer;

const Layout = (props) => {

const [tokenExpirationDate, setTokenExpirationDate] = useState();
const [token, setToken] = useState(false);
const [userId, setUserId] = useState(false);

const login = useCallback((uid, token, expirationDate) => {
  setToken(token);
  setUserId(uid);
  const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
  setTokenExpirationDate(tokenExpirationDate);
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userId: uid,
      token: token,
      expiration: tokenExpirationDate.toISOString(),
    })
  );
}, []);

const history = useHistory();
const logout = useCallback(() => {
  setToken(null);
  setTokenExpirationDate(null);
  setUserId(null);
  localStorage.removeItem("userData");
  history.push("/");
}, []);

useEffect(() => {
  if (token && tokenExpirationDate) {
    const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
    logoutTimer = setTimeout(logout, remainingTime);
  } else {
    clearTimeout(logoutTimer);
  }
}, [token, logout, tokenExpirationDate]);

let routes;
if (token) {
  routes = (
    <Switch>
      <Route path="/" exact component={PokePlug} />
      <Route path="/orders/:uid" component={YourOrders} />
      <Route path="/place-order" component={PlaceOrder} />
      <Route path="/order-success" component={OrderSuccess} />
      <Route path="/users/:uid" component={YourAccount} />
      <Route path="/update-account" component={AccountUpdate} />
    </Switch>
  );
} else {
  routes = (
    <Switch>
      <Route path="/" exact component={PokePlug} />
      <Route path="/authenticate" component={Authenticate} />
    </Switch>
  );
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
        {routes}
      </Container>
    </AuthContext.Provider>
    )
};

export default Layout;