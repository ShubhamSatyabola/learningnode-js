// <<<<<<< HEAD
const http = require('http')
const route = require('./route')
const port = 3000


const server = http.createServer(route.handler)
// =======
// const http = require('http')
// const route = require('./route')
// const port = 3000


// const server = http.createServer(route.handler)
// >>>>>>> 99bed682583faa6e955b97ff3c62c4a51d51856f
server.listen(port)