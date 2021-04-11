import React, { useState } from "react";
import { Button, Modal } from 'semantic-ui-react';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderModal = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color='red' size='large'>Order Now!</Button>}
        >
            <Modal.Header>Confirm your choices:</Modal.Header>
            <Modal.Content>

            <OrderSummary 
    selection = {props.selection}
    packs = {props.packs}
    price = {props.price}
    
  />

            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={() => setOpen(false)}>
                  Go Back
              </Button>
              <Button color='red' disabled = {props.disabled} onClick={ () => { props.checkout(); setOpen(false); } }>
      Check out
  </Button>
            </Modal.Actions>
      </Modal>
    )

};

export default OrderModal;
