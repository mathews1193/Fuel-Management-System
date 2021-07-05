import React from 'react'
import DoughnutChart from '../DoughnutChart'
import Fuel from '../Fuel/Fuel';
import "./Dashboard.css";

function Dashboard( {}) {
    const name = "Tony Stark";

    const quotes = [
        {
          id: 1,
          gallonsRequested:1500,
          deliveryAddress: 'Dr. Tony Stark',
          deliveryDate: '6/23/2021',
          suggestedPrice:4,
          totalAmount:400,
          //add title
        },
        {
          id: 2,
          gallonsRequested:500,
          deliveryAddress: 'Dr. Tony Stark',
          deliveryDate: '8/20/2021',
          suggestedPrice:4,
          totalAmount:400,
        },
        {
          id: 3,
          gallonsRequested:3000,
          deliveryAddress: 'Dr. Tony Stark',
          deliveryDate: '7/1/2021',
          suggestedPrice:4,
          totalAmount:400,
        },
        {
          id: 4,
          gallonsRequested:6000,
          deliveryAddress: 'Dr. Tony Stark',
          deliveryDate: '12/24/2021',
          suggestedPrice:4,
          totalAmount:400,
        },
      ];

      const quoteItems = quotes.map(quote => 
        <div className="fuel-history">
            <p>Order Number: {quote.id}</p>
            <p>Gallons Requested: {quote.gallonsRequested}</p>
            <p>Delivery Address: {quote.deliveryAddress}</p>
            <p>Delivery Date: {quote.deliveryDate}</p>
            <p>Suggested Price: ${quote.suggestedPrice} per gallon</p>
            <p>Total Amout Due: ${quote.totalAmount}</p>
        </div>
      )
    return (
        <div>
            <div className="img2">
                <h1 className="title">Welcome, {name}!</h1>
                <div className="order">
                    <h2>Orders</h2>
                    <h3>{quotes.length}</h3>
                </div>
                <div className="graph">
                    <DoughnutChart />
                </div>
                <h2 className="sub-title">Fuel History</h2>
                <div>
                    {quoteItems}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
