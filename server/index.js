const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))



var index = {};

// configuration of the mysql database // 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'fuel-managment-system'
})

app.post('/register', (req, res) => {

    const userId = req.body.userId;
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO users (userId, username, password) VALUES (?,?,?)", 
    [userId, username, password], (err, result) => {
      if (err) {
        console.log(err);
    } else {
        console.log("success re");
        res.send("Values inserted successfully!")
      }
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
        (err, result) => {

            if (err) {
                res.send({ err: err })
            }


            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ message: "Wrong Username/Password combination!" });
            }

        });
});

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
      });
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
// create data for Profile //

app.get('/profile', (req,res) => {
    db.query("SELECT * FROM profile WHERE userId=100010 ", (err, result) =>{
        if(err) {
            console.log(err)
        }else{
            res.send(result)
        }
    })}
)


app.post('/insert', (req,res) => {
    const userId = req.body.userId;
    const fullName = req.body.fullName;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const USstate = req.body.USstate;
    const zipCode = req.body.zipCode;
    const sqlInsert = 
    "INSERT INTO profile (userId, fullName, address1, address2, city, USstate, zipCode) VALUES (?,?,?,?,?,?,?)"
    db.query(sqlInsert,
        [userId, fullName, address1, address2, city, USstate, zipCode],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success");
            res.send("Values inserted successfully!")
        }
    }
    )
})

app.put('/edit', (req,res) => {
    const userId = req.body.userId;
    const fullName = req.body.fullName;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const USstate = req.body.USstate;
    const zipCode = req.body.zipCode;
    const sqlUpdate =
    "UPDATE profile SET fullName=?, address1=?, address2=?, city=?, USstate=?, zipCode=? WHERE userID = '100010'"

    db.query(sqlUpdate, [fullName, address1, address2, city, USstate, zipCode],(err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success");
            res.send("Values updated successfully!")
        }
    }
    )
})
//profile//

// check to see if the server is currently running on the port // 
app.listen(3001, () => {
    console.log("Cool, Your server is running on port 3001")
})

// exports

module.exports = index;