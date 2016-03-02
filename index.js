const request = require('request')
const express = require('express')

const app = express()

app.use(require('cors')())
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: false }))

app.use(function (req, res) {
  var text = req.body.Body || req.body.body || req.body.description
  text = '<@here>: ' + text

  request.post({
    uri: process.env.SLACK_URL,
    json: {
      username: 'Incident',
      icon_emoji: ':japanese_ogre:',
      text: text
    }
  })
  res.status(204).end()
})

app.listen(process.env.PORT || 8080)
