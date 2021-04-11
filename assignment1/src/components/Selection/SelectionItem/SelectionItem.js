import React from "react";
import { Grid, Image, Label } from 'semantic-ui-react';

const name = (props) => {
  return (
    <Grid.Column mobile={3} computer={5} textAlign='center'>
        <Image src={props.image} alt={props.alt} size='large' centered />
        <Label size='large' pointing>&euro; {props.price.toFixed(2)}  </Label>
    </Grid.Column>
  )
};

export default name;
