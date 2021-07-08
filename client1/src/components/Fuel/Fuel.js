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
    const [totalAmount, setTotalAmount] = useState("");

    const [orderList, setOrderList] = useState([]);
    const [newGallonsRequested, setNewGallonsRequested] = useState(1400);
    

    const getGallons = (e) => {
        setGallonsRequested(e.target.value);
        };

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
                </div>
            </div> 
        </div>
    )
}

export default Fuel
