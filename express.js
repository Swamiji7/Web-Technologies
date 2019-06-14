// using an external/thirdparty library
//to test this code
//1.from the command prompt, type-->node express.js
//2.open a browser and type localhost:3000
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

