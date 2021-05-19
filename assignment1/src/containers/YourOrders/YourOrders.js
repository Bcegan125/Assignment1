import React, { useState, useEffect, useContext } from "react";
import axios from '../../axios-orders';
import OrdersTable from '../../components/OrdersTable/OrdersTable';
import { Message } from 'semantic-ui-react';
import AuthContext from "../../context/auth-context";


const YourOrders = (props) => {
  const auth = useContext(AuthContext);  
  const [pastOrdersState, setPastOrdersState] = useState({

      orders: [],
        ordersLoaded: false,
        error: false
      });

      useEffect(() => {
                let uid = auth.userId;
        let path = "/orders/" + uid;
        axios.get(path, { headers: { Authorization: "Bearer " + auth.token } })
        .then(response => {
          setPastOrdersState({
              orders: response.data.orders, 
              ordersLoaded: true, 
              error: false});
        })
        .catch(error => {
          setPastOrdersState({
              orders: pastOrdersState.orders, 
              ordersLoaded: pastOrdersState.ordersLoaded, 
              error: true});
          console.log(pastOrdersState.error, error);
        });
      }, [])
      let orders = pastOrdersState.error ? <Message><p>Orders can't be loaded!</p></Message> : <Message><p>Orders loading...</p></Message>;

      if (pastOrdersState.ordersLoaded){

        if(pastOrdersState.orders.length > 0){
          orders = (
            <OrdersTable orders={pastOrdersState.orders} />
          );
        }
        else{
          orders = <Message><p>You haven't placed any orders yet :(</p></Message>
        }
      }


      return (
        <div>
          {orders}
        </div>
      )
};

export default YourOrders;
