const express = require('express')
const app = express()
const routes = require('./index2')
const error = require('../middleware/error');
module.exports = (router,app)=>{

    router.use('/', error, routes.GET)
    
}


