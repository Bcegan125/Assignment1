import React from "react";
import {Container} from 'semantic-ui-react';
import './Layout.css';

import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import PokePlug from '../../containers/PokePlug/PokePlug';
import YourOrders from '../../containers/YourOrders/YourOrders';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';
import OrderSuccess from '../../containers/PlaceOrder/OrderSuccess/OrderSuccess';

const Layout = (props) => {
  return (
    <Container>
        <Nav />
        <Route path="/" exact component={PokePlug} />
        <Route path="/orders" component={YourOrders} />
        <Route path="/place-order" component={PlaceOrder} />
        <Route path="/order-success" component={OrderSuccess} />
    </Container>
  )
};

export default Layout;