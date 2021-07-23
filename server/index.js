const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt')


app.use(cors());
app.use(express.json());
const users = [];

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


app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }

})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

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
                console.log("cool got it");
            } else {
                res.send({ message: "Wrong Username/Password combination!" });
            }

        });
});

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

// check to see if the server is currently running on the port // 
app.listen(3001, () => {
    console.log("Cool, Your server is running on port 3001")
})