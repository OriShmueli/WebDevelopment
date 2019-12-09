let http = require('http') 
let fs = require('fs')
const express = require('express')
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile('../Client/Public/index.html')
})

app.use(express.static('../Client/Public'))

app.listen(process.env.port || 8080)