import React from "react";
import { Grid } from 'semantic-ui-react';
import Controls from './Controls/Controls';
import Checkout from './Checkout/Checkout';

const Order = (props) => {
    return (
        <Grid.Row columns={2} centered>
          <Controls 
    selection={props.selection}
    packsAdded = {props.packsAdded}
    packsRemoved = {props.packsRemoved}
  />
          <Checkout 
    selection = {props.selection}
    packs={props.chosenPacks}
    price={props.totalPrice}
    checkout={props.checkout}
    disabled={props.disabled}
  />
    </Grid.Row>
      );
    }
export default Order;
