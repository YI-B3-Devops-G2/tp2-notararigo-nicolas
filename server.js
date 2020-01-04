'use strict';

const express = require('express');
const { Client } = require('pg');

// Constants
const PORT = 8080;
const pg = new Client({
  user: "root",
  password: "qwertyuiop",
  host: "postgres",
  database: "DatabaseName",
  port: 5432,
});

// App
const app = express();
app.get('/', (req, res) => {
  res.send("Welcome on Nginx");

});
app.get('/api', (req, res) => {
  res.send( { "message": "Hello World" });
});
app.get('/status', (req, res) => {
  res.send({
    "status": "OK",
    "postgresUptime": "String",
    "redisConnectedClients": "Number"
  });
});

app.listen(PORT);
console.log('le serveur est lancer au port'+ PORT);
