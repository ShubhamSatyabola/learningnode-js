const http = require('http')
const route = require('./route')
const port = 3000


const server = http.createServer(route.handler)
server.listen(port)