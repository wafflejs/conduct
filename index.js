const http = require('http')
const request = require('request')

const server = http.createServer(function (request, response) {
  response.writeHead(204)
  response.end()
})

server.listen(8080)
