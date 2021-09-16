const express = require('express')
const routes = require('./routes')
const app = express()

require('dotenv').config()

app.use(express.json())
var router = require('express').Router();
app.use('/', router);
require(__dirname + '/routes/index.js')(router, app);

app.listen(2020, ()=>{
    console.log("Server is running!!")
})