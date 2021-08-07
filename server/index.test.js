const { db } = require("./index");
const express = require('express');
const request = require("supertest");
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

  test("create a profile for user", async () => {
    const newProfile = await request(app)
    .post("/insert")
    .send({
      userId: 1,
      fullName: "Bruce Wayne",
      address1: "623 Alfred Way",
      address2: "",
      city: "Gotham City",
      USstate:"New York",
      zipCode: "99099",
    });
  });
});

  test("check for fuel quotes stores to db", async() => {
    const newQuote = await request(app)
    .post("/create")
    .send({
      userId: 1,
      orderId: 1,
      gallonsRequested: 1500,
      deliveryDate: "Mon Aug 02 2021",
      suggestedPrice: 1.695,
      totalAmount: 2450
    });
  });
