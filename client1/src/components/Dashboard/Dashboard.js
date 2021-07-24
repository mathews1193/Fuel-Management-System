import React , { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Axios from 'axios';
import "./Dashboard.css";
import ErrorPage from '../../containers/ErrorPage';

toast.configure();

const Dashboard = (props) => {

  const {
    isAuth, 
    userId
  } = props;
  
  const [orderList, setOrderList] = useState([]);
  const[name, setName] = useState();
  
    // API call to fetch name from db if found 
    Axios.get(`http://localhost:3001/fullName/${userId}`).then((response) => {
       setName(response.data[0].fullName);
    });

    // API call to fetch fuel history and store the orderlist array 
    Axios.get("http://localhost:3001/fuelquotes").then((response) => {
      setOrderList(response.data);
    });
  
  const deleteOrder = (orderId) => {
    // API call to delete an fuel quote by finding the orderID 
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
                  <h2>{orderList.length}</h2>
                  <h2>Orders</h2>
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
                <ErrorPage />
              )}
        </div>
    )
}

export default Dashboard
