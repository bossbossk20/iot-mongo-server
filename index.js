var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var iot = require('./models/iot/iot.schema.js')
var login  = require('./models/login/login.schema.js')

mongoose.connect('mongodb://localhost:27017/iot')
var app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/api/iot', function (req, res, next) {
    iot.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  })


app.post('/',function(req,res){
    var obj = new iot(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
})


  app.post('/api/iot',function(req,res){
      var obj = new iot(req.body)
      obj.save(function (err, obj) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send(obj)
        }
      })
  })

  app.delete('/api/iot/:id', function (req, res){
      return iot.findById(req.params.id, function (err, iot) {
        return iot.remove(function (err) {
          if (!err) {
            console.log("removed")
            return res.send('')
          } else {
            console.log(err)
          }
        })
      })
    })

  app.post('/koy',function(req,res){
      console.log(req.body.search);
      iot.find({temperature:req.body.search}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
      
  })

  





 var login = require('./models/login/login.route.js')
 app.use('/', login)

	app.get('/' , function(req,res){
		res.send("hello")
	})
	
 
	
	
app.listen(3000)
console.log("running on port 3000")
	