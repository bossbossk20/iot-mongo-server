var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Model = require('./models/iot/iot.schema.js')
mongoose.connect('mongodb://localhost:27017/iot')
var app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/api/iot',function(req,res){
    Model.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
});


app.post('/',function(req,res){
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
})

app.post('/models/api',function(req,res){
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
})

// var iot = require('./models/iot/iot.route.js')
// app.use('/api/iot', iot)

	// app.get('/' , function(req,res){
	// 	res.send("hello")
	// })
	
	
	
app.listen(3000)
console.log("running on port 3000")
	