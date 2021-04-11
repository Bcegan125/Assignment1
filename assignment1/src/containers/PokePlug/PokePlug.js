import React, { useState, useEffect } from "react";
import { Grid } from 'semantic-ui-react';
import Selection from '../../components/Selection/Selection';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import { v4 as uuidv4 } from 'uuid';

let orderPacks = [];


const PokePlug = (props) => {

    /*const [selectionState, setSelectionState] = useState({
        packs: [
          { id: 0, name: 'Battle Styles', price: 4, image: 'images/packs/Battle Styles.png', alt: 'Battle Styles' },
          { id: 1, name: 'Vivid Voltage', price: 6, image: 'images/packs/Vivid Voltage.png', alt: 'Vivid Voltage' },
          { id: 2, name: 'Darkness Ablaze', price: 4, image: 'images/packs/darkness ablaze.png', alt: 'Darkness Ablaze' },
          { id: 3, name: 'Team Up', price: 8, image: 'images/packs/Team Up.png', alt: 'Team Up' },
          { id: 4, name: 'Shiny Star V', price: 12, image: 'images/packs/ssv.png', alt: 'Shiny Star V' },
          { id: 5, name: 'Matchless Fighters', price: 4, image: 'images/packs/matchless fighters.png', alt: 'Matchless Fighters' },
         
        ]
        
      });*/

      const [selectionState, setSelectionState] = useState({
        packs: []
        
      });

      useEffect(() => {
        axios.get('/packs.json')
        .then(response => {
          setSelectionState({packs: response.data});
          console.log(response);
        });
    }, [])

      const [orderState, setOrderState] = useState({
        totalPrice: 0, 
        chosenPacks: []
      });

      /*const addPacksHandler = (id) => {
        const index = selectionState.packs.findIndex(packs => packs.id === id);

        const chosenPacks = {
          id: selectionState.packs[index].id,
          name: selectionState.packs[index].alt,
          price: selectionState.packs[index].price
        };

        orderPacks.push(chosenPacks);

        const newPrice = orderState.totalPrice + selectionState.packs[index].price;

        setOrderState({
          totalPrice: newPrice,
          chosenPacks: orderPacks
        });
      }*/

      const addPacksHandler = (id) => {
        // find the chosen topping in the menu
        const selectionIndex = selectionState.packs.findIndex(packs => packs.id === id);
  
      // check if the topping has already been added to the orderToppings array
      const orderIndex = orderPacks.findIndex(packs => packs.id === id);
  
      // if so, increase its count by 1
      if (orderIndex > -1){
        orderPacks[orderIndex].count++;
      }
      // otherwise (i.e. this topping is being added for the first time)
      // create this topping and add it to the order toppings array
      else{
        // Save the id, name and price of the chosen topping; set its count to 1
        const chosenPacks = {
          id: selectionState.packs[selectionIndex].id,
          name: selectionState.packs[selectionIndex].alt,
          price: selectionState.packs[selectionIndex].price,
          count: 1
        };
        orderPacks.push(chosenPacks);
      }
  
      // Calculate the new price
      const newPrice = orderState.totalPrice + selectionState.packs[selectionIndex].price;
  
      // Update the order state with the new price and updated toppings array
      setOrderState({
        totalPrice: newPrice,
        chosenPacks: orderPacks
      });
    }
      

      /*const removePacksHandler = (id) => {
     
        const index = orderState.chosenPacks.findIndex(packs => packs.id === id);
    
      
        let price = orderState.totalPrice; 
    
       
        if(index >= 0){
          price = price - orderState.chosenPacks[index].price;
          orderPacks.splice(index, 1);
        }
    
       
        setOrderState({
          totalPrice: price,
          chosenPacks: orderPacks
        });
      }*/

      const removePacksHandler = (id) => {
        // Find topping with matching id from the orderToppings
        const index = orderPacks.findIndex(packs => packs.id === id);
    
        // Get the current price
        let price = orderState.totalPrice; 
    
        // If topping was found, update the price and decrease the count
        if(index >= 0){
          price = price - orderPacks[index].price;
          orderPacks[index].count--;
    
          // If the count is now 0, remove the topping completely
          if(orderPacks[index].count < 1){
            orderPacks.splice(index, 1);
          }
        }
    
        // Update order state with updated price and updated toppings array
        setOrderState({
          totalPrice: price,
          chosenPacks: orderPacks
        });
      }      


      let checkoutDisabled = true;

      if (orderState.chosenPacks.length > 0){
        checkoutDisabled = false;
      }


      const checkoutHandler = () => {

            // get order from orderState
      let order = orderState;

      // add unique id
      order.id = uuidv4();

      // create formatted date
      let orderDate = new Date();

      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      let dayNum = orderDate.getDay();
      let day = days[dayNum];

      let monthNum = orderDate.getMonth();
      let month = months[monthNum];

      let date = orderDate.getDate();
      let year = orderDate.getFullYear();

      // saves date in the format "Fri 19 Mar 2021"
      let formattedDate = day + " " + date + " " + month + " " + year;

      // add formattedDate to order
      order.date = formattedDate;

         axios.post('/orders.json', orderState)
        .then(response => {
            alert('Pack order saved!');
            setOrderState({
              totalPrice: 0,
              chosenPacks: []
            });
            orderPacks=[];
        });
    }
      

  return (
    <Grid divided='vertically' stackable>
        <Grid.Row centered>
        <Selection selection={selectionState.packs} />
        </Grid.Row>  
        <Order 
    selection={selectionState.packs}
    packsAdded={addPacksHandler}
    packsRemoved={removePacksHandler}
    chosenPacks={orderState.chosenPacks}
    totalPrice={orderState.totalPrice}
    checkout={checkoutHandler}
    disabled={checkoutDisabled}
  />
  </Grid>
  
  )
};

export default PokePlug;