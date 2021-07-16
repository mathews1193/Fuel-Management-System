const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

var index = {};

// configuration of the mysql database // 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'password',
    database:'fuel-managment-system'
})

// create data from require and response of data // 
app.post('/create', (req, res) => {
    const userId = req.body.userId;
    const orderId = req.body.orderId;
    const gallonsRequested = req.body.gallonsRequested;
    const deliveryDate = req.body.deliveryDate;
    const deliveryAddress = req.body.deliveryAddress;
    const suggestedPrice = req.body.suggestedPrice;
    const totalAmount = req.body.totalAmount;


    // insert new data into the table (hint:table name needs to be one word!!!!!) // 
    db.query("INSERT INTO fuelquotes (orderId, userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount) VALUES (?,?,?,?,?,?,?)", 
    [orderId, userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success");
            res.send("Values inserted successfully!")
        }
    }
    );
});

app.get("/fuelquotes", (req, res) => {
    db.query("SELECT * FROM fuelquotes", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/update", (req, res) => {
    const orderId = req.body.orderId;
    const gallonsRequested = req.body.gallonsRequested;
    db.query("UPDATE fuelquotes SET gallonsRequested = ? WHERE orderId = ?",
      [gallonsRequested, orderId],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.delete("/delete/:orderId", (req, res) => {
    const orderId = req.params.orderId;
    db.query("DELETE FROM fuelquotes WHERE orderId = ?", orderId, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

// check to see if the server is currently running on the port // 
app.listen(3001, () => {
    console.log("Cool, Your server is running on port 3001")
})

// exports

module.exports = index;