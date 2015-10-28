;(function () {
  'use strict'
  var modelName = 'iot'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    
      timestamp: Number,
      iot_id: Number,
      temperature: Number,
      relative_humidity: Number 
    

    // date: { type: Date, default: Date.now }

  })

  module.exports = mongoose.model(modelName, schema)
})()
