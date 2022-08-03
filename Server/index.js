const express = require('express')
const app = express();
const mysql = require("mysql")
const cors = require('cors')

app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "usermanage",
  });

  app.get("/usermanage/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});
app.delete("/usermanage/users/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/usermanage/users", (req, res) => {
  const UserName = req.body.UserName;
  const fist_name = req.body.fist_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const address = req.body.address;
  const create_by = req.body.create_by;
  const create_dete = req.body.create_dete;
  const last_update_by = req.body.last_update_by;
  const last_update_date = req.body.last_update_date;
  db.query( "INSERT INTO users (UserName, fist_name, last_name,email,address ,create_by, create_dete,last_update_by,last_update_date) VALUES (?,?,?,?,?,?,?,?,?)",[UserName, fist_name, last_name,email,address ,create_by, create_dete,last_update_by,last_update_date], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/usermanage/province", (req, res) => {
  db.query("SELECT * FROM province", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/usermanage/khwangnew", (req, res) => {
  db.query("SELECT * FROM khwangnew", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/usermanage/khwang", (req, res) => {
  db.query("SELECT * FROM khwang", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});




app.listen('3001',()=>{
  console.log('Server is running on port 3001')
})