const request = require('request')
const express = require('express')

const app = express()

app.use(require('body-parser').urlencoded({ extended: false }))

app.use(function (req, res) {
  console.log(req.body)
  res.status(204).end()
})

app.listen(process.env.PORT || 8080)
