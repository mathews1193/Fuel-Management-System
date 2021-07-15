const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))



// configuration of the mysql database // 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'password',
    database:'fuel-management-system'
})



// create data from require and response of data // 
app.post('/create', (req, res) => {
    const userId = req.body.userId;
    const gallonsRequested = req.body.gallonsRequested;
    const deliveryDate = req.body.deliveryDate;
    const deliveryAddress = req.body.deliveryAddress;
    const suggestedPrice = req.body.suggestedPrice;
    const totalAmount = req.body.totalAmount;


    // insert new data into the table (hint:table name needs to be one word!!!!!) // 
    db.query("INSERT INTO fuelquotes (userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount) VALUES (?,?,?,?,?,?)", 
    [userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount],
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

// create data for Profile //

app.get('/profile', (req,res) => {
    db.query("SELECT * FROM profile WHERE userId=100015 ", (err, result) =>{
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
    "UPDATE profile SET fullName=?, address1=?, address2=?, city=?, USstate=?, zipCode=? WHERE userID = '100015'"

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