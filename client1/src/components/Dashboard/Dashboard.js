import React , { useState } from 'react';
import { Redirect } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Axios from 'axios';
import "./Dashboard.css";
import Login from '../Login/Login';

toast.configure();

const Dashboard = ({ isAuth }) => {
  
  const [orderList, setOrderList] = useState([]);

  const name = "Tony Stark";
  console.log(isAuth);

  // API call to fetch fuel history and store the orderlist array 
  Axios.get("http://localhost:3001/fuelquotes").then((response) => {
    setOrderList(response.data);
  });
    
    // API call to delete an fuel quote by finding the orderID 
  const deleteOrder = (orderId) => {
    Axios.delete(`http://localhost:3001/delete/${orderId}`).then((response) => {
      setOrderList(
        orderList.filter((quote) => {
          return quote.orderId !== orderId;
            
        }) 
      );
    });
    toast("Fuel Order: " + orderId + " Deleted successfully!");
  };
                        
    return (
        <div>
            { isAuth === true ? (
              <div className="img2">
                <div className="form1">
                <h1 className="title">Welcome, {name}!</h1>
                <div className="order">
                    <h2>Orders</h2>
                    <h3>{orderList.length}</h3>
                </div>
                <h2 className="sub-title">Fuel History</h2>
                <div>
                {orderList.map((quote, key) => {
                  return(
                  <div className="fuel-history">
                    <p>Order Number: {quote.orderId}</p>
                    <p>Gallons Requested: {quote.gallonsRequested}</p>
                    <p>Delivery Address: {quote.deliveryAddress}</p>
                    <p>Delivery Date: {quote.deliveryDate}</p>
                    <p>Suggested Price: ${quote.suggestedPrice} per gallon</p>
                    <p>Total Amout Due: ${quote.totalAmount}</p>
                    <div className="btn-container">
                      <button className="btn-del" onClick={() => {deleteOrder(quote.orderId)}}>Delete</button>
                    </div>
                  </div>
          );
        })};
                </div>
              </div> 
            </div>
              ) : (
                <h1>User not login</h1>
              )}
        </div>
    )
}

export default Dashboard
