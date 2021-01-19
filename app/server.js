

var express = require('express') //llamamos a Express
var app = express()       
var cors=require('cors');
var bodyParser = require('body-parser')        
 
var port = process.env.PORT || 1339 // establecemos nuestro puerto
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            
 
var router = require('./routes')
app.use('/api', router)
//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
