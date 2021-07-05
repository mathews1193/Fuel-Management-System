import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Axios from 'axios';
import "./Fuel.css";

toast.configure();

function Fuel() {
    const [userId, setUserId] = useState(1);
    const [orderId, setOrderId] = useState("");
    const [gallonsRequested, setGallonsRequested] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("988 Low Lane");
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [suggestedPrice, setSuggestedPrice] = useState("1.95");
    const [totalAmount, setTotalAmount] = useState("2800");

    const [orderList, setOrderList] = useState([]);
    const [newGallonsRequested, setNewGallonsRequested] = useState(1400);

    const getGallons = (e) => {
        setGallonsRequested(e.target.value);
        };

    // function to create a new fuel quote
    const requestQuote = () => {

        Axios.post('http://localhost:3001/create',{
            userId:userId,
            orderList:orderId,
            gallonsRequested:gallonsRequested,
            deliveryAddress:deliveryAddress,
            deliveryDate:deliveryDate,
            suggestedPrice: suggestedPrice,
            totalAmount: totalAmount,
        }).then(() => {
            setOrderList([
                ...orderList,
                {
                    userId:userId,
                    orderList:orderId,
                    gallonsRequested:gallonsRequested,
                    deliveryAddress:deliveryAddress,
                    deliveryDate:deliveryDate,
                    suggestedPrice: suggestedPrice,
                    totalAmount: totalAmount,
                },
              ]);
            });
            toast("Fuel Order Placed Successfully!");

            Axios.get("http://localhost:3001/fuelquotes").then((response) => {
              setOrderList(response.data);
            });
          };

        const updateOrder = (orderId) => {
            Axios.put("http://localhost:3001/update", { gallonsRequested: newGallonsRequested, orderId: orderId }).then(
              (response) => {
                setOrderList(
                  orderList.map((quote) => {
                    return quote.orderId == orderId
                      ? {
                        userId:userId,
                        orderList:orderId,
                        gallonsRequested:gallonsRequested,
                        deliveryAddress:deliveryAddress,
                        deliveryDate:deliveryDate,
                        suggestedPrice: suggestedPrice,
                        totalAmount: totalAmount,
                        }
                      : quote;
                  })
                );
              }
            );
          };

        const deleteOrder = (orderId) => {
            Axios.delete(`http://localhost:3001/delete/${orderId}`).then((response) => {
              setOrderList(
                orderList.filter((quote) => {
                  return quote.orderId != orderId;
                })
              );
            });
          };

    return (
        <div>
            <div className="form">
                <div className="img">
                    <h1 className="title">Fuel Quote Form</h1>
                    <div className="fuel-form">
                        <input 
                        type = "text" 
                        className="fuel"
                        placeholder="Gallons Requested"
                        onChange={getGallons}
                        value={gallonsRequested}
                        autoFocus required 
                        />
                        <DatePicker 
                        className="date"
                        placeholder="Delivery Date"
                        selected={deliveryDate} 
                        onChange={(date) => setDeliveryDate(date)} 
                        />
                    </div>
                    <div className="btn-container" >
                        <button onClick={requestQuote} className="btn-fuel">Request A Fuel Quote</button> 
                    </div>
                    {orderList.map((quote, key) => {
                        return (
                        <div className="fuel-form">
                                <h3>Order Number: {quote.orderId}</h3>
                                <h3>Gallons Requested: {quote.gallonsRequested}</h3>
                                <h3>Delivery Address: {quote.deliveryAddress}</h3>
                                <h3>Delivery Date: {quote.deliveryDate}</h3>
                                <h3>Suggested Price: ${quote.suggestedPrice} per gallon</h3>
                                <h3>Total Amout Due: ${quote.totalAmount}</h3>
                            <div>
                                <button onClick={() => {updateOrder(quote.gallonsRequested)}}>{" "} Update</button>
                                <button onClick={() => {deleteOrder(quote.orderId)}}>Delete</button>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div> 
        </div>
    )
}

export default Fuel
