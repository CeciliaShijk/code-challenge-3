const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 5000;

// import body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const pool =  mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',  // 密码改成你自己的
  database: 'node_demo', // 数据库改成你自己的
  waitForConnections: true,
});

//app.use(express.static(path.join(__dirname, '../my-app/build')));


pool.getConnection().then(() => console.log("Mysql connected!"));
module.exports = pool;

// import transaction.js
const transaction = require("./route/transaction");
app.use("/transaction",transaction);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
