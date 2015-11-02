;(function () {
  'use strict'
  var express = require('express')
  var router = express.Router()
  var Model = require('./login.schema.js')

  router.get('/api/login', function (req, res, next) {
    Model.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  })

  router.post('/api/login', function (req, res, next) {
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
  })

     router.post('/login',function(req,res){
      console.log(req.body.username + " " +req.body.password);
       
       Model.find({ username : req.body.username , password : req.body.password }).exec(function (err, results) {
       if (err) {
         res.status(500).send(err)
       } else {
         res.send(results)
         console.log(results)
       }
     })
      
  })
  

  module.exports = router
})()
