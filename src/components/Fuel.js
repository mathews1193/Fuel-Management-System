import React from 'react';

function Fuel() {
    return (
        <div>
            <h1> Fuel Quote Form</h1>

            <input 
               type = "text" 
               autofocus required 
               />
            <input 
               type = "text" 
               autofocus required 
               />

            <button>Request A Fuel Quote</button>
        </div>
    )
}

export default Fuel
