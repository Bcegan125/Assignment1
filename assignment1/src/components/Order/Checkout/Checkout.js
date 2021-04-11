import React from "react";
import { Grid, Header, Segment } from 'semantic-ui-react';
import OrderSummary from './OrderSummary/OrderSummary';
import OrderModal from './OrderModal/OrderModal';

const Checkout = (props) => {
  return (
    <Grid.Column width={6} textAlign='right'>
<Segment color='red'>
    <Header as='h2' textAlign='center' className='step'>
        Step 2: Check out 
    </Header>

    <OrderSummary 
    selection = {props.selection}
    packs = {props.packs}
    price = {props.price}
  />
  <OrderModal 
    selection = {props.selection}
    packs = {props.packs}
    price = {props.price}
    checkout={props.checkout}
    disabled={props.disabled}
  />
    </Segment>
</Grid.Column>
  )
};

export default Checkout;
