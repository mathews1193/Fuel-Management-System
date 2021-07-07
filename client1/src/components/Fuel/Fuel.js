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
    const [orderId, setOrderId] = useState();
    const [gallonsRequested, setGallonsRequested] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("988 Low Lane");
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [suggestedPrice, setSuggestedPrice] = useState("1.95");
    const [totalAmount, setTotalAmount] = useState((gallonsRequested*suggestedPrice));

    const [orderList, setOrderList] = useState([]);
    const [newGallonsRequested, setNewGallonsRequested] = useState(1400);
    

    const getGallons = (e) => {
        setGallonsRequested(e.target.value);
        };

    // API call to fetch fuel history and store the orderlist array 
    Axios.get("http://localhost:3001/fuelquotes").then((response) => {
        setOrderList(response.data);
      });

    // API call to create a fuel quote and store it into the orderlist array
    const requestQuote = () => {

        Axios.post('http://localhost:3001/create',{
            userId:userId,
            orderId:orderId,
            gallonsRequested:gallonsRequested,
            deliveryAddress:deliveryAddress,
            deliveryDate:deliveryDate.toDateString(),
            suggestedPrice: suggestedPrice,
            totalAmount: totalAmount.toString(),
        }).then(() => {
            setOrderList([
                ...orderList,
                {
                    userId:userId,
                    orderId:orderId,
                    gallonsRequested:gallonsRequested,
                    deliveryAddress:deliveryAddress,
                    deliveryDate:deliveryDate.toDateString(),
                    suggestedPrice: suggestedPrice,
                    totalAmount: totalAmount.toString(),
                },
              ]);
            });
            toast("Fuel Order Placed Successfully!");
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

    // API call to delete an fuel quote by finding the orderID 
    const deleteOrder = (orderId) => {
        Axios.delete(`http://localhost:3001/delete/${orderId}`).then((response) => {
          setOrderList(
            orderList.filter((quote) => {
              return quote.orderId != orderId;
                
            }) 
          );
        });
        toast("Fuel Order: " + orderId + " Deleted successfully!");
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
                        dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <div className="btn-container" >

                        <button onClick={requestQuote} className="btn-fuel">Request A Fuel Quote</button> 
                    </div>
                    {orderList.map((quote, key) => {
                        return (
                        <div className="fuel-history">
                                <p>Order Number: {quote.orderId}</p>
                                <p>Gallons Requested: {quote.gallonsRequested}</p>
                                <p>Delivery Address: {quote.deliveryAddress}</p>
                                <p>Delivery Date: {quote.deliveryDate}</p>
                                <p>Suggested Price: ${quote.suggestedPrice} per gallon</p>
                                <p>Total Amout Due: ${quote.totalAmount}</p>
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
