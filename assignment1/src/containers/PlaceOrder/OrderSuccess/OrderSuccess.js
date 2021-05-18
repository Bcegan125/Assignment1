import React from "react";
import { Header, Segment, Image } from 'semantic-ui-react';

const OrderSuccess = (props) => {
  return (
    <Segment color='red'>
        <Header as='h2' textAlign='center' color='red'>
          Your cards are on the way!
        </Header>
        <Image src='/images/squ.gif' size='medium' centered />
    </Segment>
  )
};

export default OrderSuccess;
