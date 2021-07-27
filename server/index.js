const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

//bcrypt
const bcrypt = require('bcrypt')
const saltRounds = 10

var index = {};

app.use(cors());
app.use(express.json());



//////////////////////////////////////////
// configuration of the mysql database // 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'fuel-management-system'
})

// check to see if the server is currently running on the port
app.listen(3001, () => {
    console.log("Cool, Your server is running on port 3001")
})

////////////////////////////////////////

//////////////////////////// User credentials /////////////////////////////////////////////

// register 
app.post('/register', (req, res) => {

    const userId = req.body.userId;
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err);
        }
        db.query("INSERT INTO users (userId, username, password) VALUES (?,?,?)",
            [userId, username, hash], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("success re");
                    res.send("Values inserted successfully!")
                }
            });
    })

});

//login credentials
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM users WHERE username = ?",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        res.send("You have sucessfully logged in")
                    } else {
                        res.send({ message: "Wrong Username/Password combination!" })
                    }
                })

            } else {
                res.send({ message: "User doesn't exist" });
            }
        });
});

// find userID from the username
app.get('/userid/:username', (req, res) => {
    const username = req.params.username;
    db.query("SELECT userId FROM users WHERE username=?", username, (err, result) => {
        if (err) {
            return console.log(err);
        } else {
            return res.send(result);
        }
    });
});

//////////////////////////// Fuel History /////////////////////////////////////////////

// create data from require and response of data // 
app.post('/create', (req, res) => {
    const userId = req.body.userId;
    const orderId = req.body.orderId;
    const gallonsRequested = req.body.gallonsRequested;
    const deliveryDate = req.body.deliveryDate;
    const deliveryAddress = req.body.deliveryAddress;
    const suggestedPrice = req.body.suggestedPrice;
    const totalAmount = req.body.totalAmount;


    // insert new data into the table (hint:table name needs to be one word!!!!!)
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

// Get all the fuel quotes stored in the db
app.get("/fuelquotes", (req, res) => {

    db.query("SELECT * FROM fuelquotes", (err, result) => {
        if (err) {
            return console.log(err);
        } else {
            return res.send(result);
        }
    });
});

  // delete fuel quotes from the db 
  app.delete("/delete/:orderId", (req, res) => {
    const orderId = req.params.orderId;
    db.query("DELETE FROM fuelquotes WHERE orderId = ?", orderId, (err, result) => {
        if (err) {
            return console.log(err);
        } else {
            return res.send(result);
        }
    });
});

app.get('/getprofile/:userId', (req,res) => {
    
    const userId = req.params.userId;
    db.query("SELECT * FROM profile WHERE userId = ? ", userId, (err, result) =>{
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/address/:userId', (req,res) => {
    
    const userId = req.params.userId;
    
    db.query("SELECT address1, city, USstate FROM profile WHERE userId=?", userId, (err, result) =>{
        if(err) {
            return console.log(err);
        } else {
            return res.send(result);
        }
    });
});

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
        "UPDATE profile SET fullName=?, address1=?, address2=?, city=?, USstate=?, zipCode=? WHERE userId = ?"

    db.query(sqlUpdate, [fullName, address1, address2, city, USstate, zipCode, userId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success");
            res.send("Values updated successfully!")
        }
    }
    )
})

app.get('/fullName/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query("SELECT fullName FROM profile WHERE userId=?", userId, (err, result) => {
        if (err) {
            return console.log(err);
        } else {
            return res.send(result);
        }
    });
});

// exports
module.exports = index;