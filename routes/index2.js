const express = require('express')
const router = express.Router()

const getBD = require('../controllers/getBD');

module.exports.GET = router.get(`/`,async(req,res)=>{
let body = req.body


let response = await getBD.GET(body)

res.status(200).json({
    result: response
})
})

