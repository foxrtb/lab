const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database/anodos.db');
const mn = require('./mn.js');


app.use(express.static('views'))




app.get('/api/mncount.json', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all('SELECT * FROM mncount', (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});

app.get('/api/mnnow.json', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all('select * FROM mncount order by _id desc limit 1', (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});

app.get('/api/netnow.json', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all('select * FROM network order by _id desc limit 1', (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});


app.get('/api/supply.json', (req, res) => {
  db.all('SELECT * FROM supply', (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});


app.get('/api/network.json', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all('SELECT * FROM network', (err, rows) => {
    console.log(rows);
    const networkStats = (rows);
    console.log(rows);
    res.send(rows);
  });
});


//Querry Masternodes
app.get('/api/hello', function (req, res) {
  res.send('hello world')
})

app.get('/api/mn', function (req, res) {  
  mn.getdata(function (error, MNList) {
 // console.log(MNList);
  res.send(MNList);
  });
  
})

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
