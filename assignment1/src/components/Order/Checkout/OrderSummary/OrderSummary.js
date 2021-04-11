import React from "react";
import { Header, List } from 'semantic-ui-react';

const OrderSummary = (props) => {
 



   /* 
 // get all the ids of the chosen toppings
 const packsIdsArray = [];
 for(let i in props.packs){
     packsIdsArray.push(props.packs[i].id);
 };

 // function to count occurences of each topping
 const countOccurrences = (array, value) => array.reduce((count, num) => (num === value ? count + 1 : count), 0);

 // create an empty array for storing the toppings with their counts
 const packsSummary = [];

 // loop through and check for all 16 ids
 for(let id=0; id<16; id++){

     // use countOccurences to count occurences of each id
     let packsCount = countOccurrences(packsIdsArray, id);

     // if a topping has a count more than 0
     if (packsCount > 0) {

         // create a new object for that topping that includes the count
         const packsWithCount = {
             id: id,
             name: props.selection[id].alt,
             count: packsCount
         };

         // add the toppingWithCount to the toppingsSummary array
         packsSummary.push(packsWithCount);
     }
 }
*/
 let summary = null;

 if(props.packs.length > 0){

     summary = (
         <div>
             <Header as='h3'>
                 Your packs: 
             </Header>

             <List divided verticalAlign='middle'>
                 {props.packs.map((packs) => {
                     return( 
                         <List.Item key={packs.id}>
                             {packs.name}: {packs.count}
                         </List.Item>
                     )
                 })}
             </List>

             <Header as='h4' className='h4margin'>
                 Total Price: &euro; {props.price.toFixed(2)}
             </Header>
         </div>
     );
 }
 else{
     summary = (
         <div>
             <Header as='h4' className="h4margin">
                 Pick out some packs! 
             </Header>
         </div>
     );
 }

 return (
    <div>
        {summary}
    </div>
);
 }
export default OrderSummary;
