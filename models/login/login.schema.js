;(function () {
  'use strict'
  var modelName = 'login'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    username: String,
    password: String,
    name: String,
    last_name: String,
    date: { type: Date, default: Date.now }

  })

  module.exports = mongoose.model(modelName, schema)
})()
