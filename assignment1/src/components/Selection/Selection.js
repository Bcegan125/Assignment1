import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import SelectionItem from './SelectionItem/SelectionItem';

const Selection = (props) => {
  return (

    <Grid.Column width={12}>

        <Segment color='red'>
            <Header as='h2' font-size = '30px' textAlign='center' color='black'>
                PokePlug Selection
            </Header>
        </Segment>

        <Segment color='red'>
        <Grid>
            {props.selection.map((packs, index) => {
            return <SelectionItem 
                key={packs.id}
                image={packs.image}
                alt={packs.alt}
                price={packs.price}
            />
            })}
        </Grid>
</Segment>
    </Grid.Column>
  );
}

export default Selection;