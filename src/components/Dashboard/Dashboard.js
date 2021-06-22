import React from 'react'
import "./Dashboard.css";

function Dashboard() {
    const name = "Austin"
    return (
        <div>
            <div className="img2">
                <h1 className="title">Welcome, {name}!</h1>
                <h2 className="sub-title">Fuel History</h2>
                <div className="fuel-history">
                    <p>Gallons Requested:</p>
                    <p>Delivery Address:</p>
                    <p>Delivery Date:</p>
                    <p>Suggested Price:</p>
                    <p>Total Amout Due:</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
