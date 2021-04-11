import React from "react";
import { Grid, Header, Segment } from 'semantic-ui-react';
import Control from './Control/Control';

const Controls = (props) => {
  return (
    <Grid.Column width={8}>
        <Segment color='red'>
        <Header as='h2' textAlign='center' className='step'>
            Step 1: Choose your packs
        </Header>
        <Grid>
            {props.selection.map((packs, index) => {
            return <Control 
                key={packs.id}
                alt={packs.alt}
                added={() => props.packsAdded(packs.id)}
                removed={() => props.packsRemoved(packs.id)}
            />
            })}
            
        </Grid>
        </Segment>
    </Grid.Column>
  )
};

export default Controls;