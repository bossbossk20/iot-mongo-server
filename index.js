var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost')
var app = express()
	
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var iot = require('./models/iot/iot.route.js')
app.use('/api/iot', iot)

	// app.get('/' , function(req,res){
	// 	res.send("hello")
	// })
	
	
	
app.listen(3000)
console.log("running on port 3000")
	