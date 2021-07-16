const Index = require("./index");
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// configuration of the mysql database // 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'password',
    database:'fuel-managment-system'
})


describe("Should perform CRUD on fuel quotes", () => {
  test("create fuel quote", async() => {
      
    app.get("/fuelquotes", (req, res) => {
      const result = db.query("SELECT * FROM fuelquotes")
      console.log(result);
    });
    
    expect(result).toNotBeNull();
  });
  
});
   

 