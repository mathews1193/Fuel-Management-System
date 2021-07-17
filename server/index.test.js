const { db } = require("./index");
const supertest = require("supertest");
const express = require('express');
const app = express();

describe("Should perform CRUD on fuel quotes", () => {

  test("delete a fuel quote", async () => {
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
  });

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
