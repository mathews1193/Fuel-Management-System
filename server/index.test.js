const { db } = require("./index");
const express = require('express');
const app = express();

describe("Should perform CRUD on fuel quotes", () => {

  test("delete a fuel quote", async () => {
    app.delete("/delete/:orderId", (req, res) => {
      const orderId = 1;
      db.query("DELETE FROM fuelquotes WHERE orderId = ?", orderId, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
  });

  describe("Find user information", () => {

    test("find userId by using username", async () => {
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
    });
  });

  test("return address", async() => {
    app.get('/address/:userId', (req,res) => {
    
      const userId = req.body.userId;
      
      db.query("SELECT address1, city, USstate FROM profile WHERE userId=1", userId, (err, result) =>{
          if(err) {
              console.log(err)
          } else {
              res.send(result)
          }
      });
  });
})

  test("check for fuel quotes stores to db", async() => {
    const result = [];
    app.get("/fuelquotes", (req, res) => {
     
      result = db.query("SELECT * FROM fuelquotes")
      console.log(result);
    });
    expect(result).not.toBeNull();
  });

  test("get fuel quotes from db", async() => {

    app.get("/fuelquotes", (req, res) => {
      db.query("SELECT * FROM fuelquotes", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
  });
});

describe("Should perform CRUD on profile", () => {

  test("create a fuel quote", async () => {
    app.post('/insert', (req,res) => {
      const userId = '100003';
    const fullName = req.body.fullName;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const USstate = req.body.USstate;
    const zipCode = req.body.zipCode;
    const sqlInsert = 
    "INSERT INTO profile (userId, fullName, address1, address2, city, USstate, zipCode) VALUES (?,?,?,?,?,?,?)"
    db.query(sqlInsert,
        [userId, fullName, address1, address2, city, USstate, zipCode])
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
  });

  test("check for fuel quotes stores to db", async() => {
    const result = [];
    app.get("/profile", (req, res) => {
     
      result = db.query("SELECT * FROM profile")
      console.log(result);
    });
    expect(result).not.toBeNull();
  });

  test("get fuel quotes from db", async() => {

    app.get("/profile", (req, res) => {
      db.query("SELECT * FROM profile", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
  });
