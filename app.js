const http = require('http')
const port = 4000

const server = http.createServer((req,res)=>{
    res.write('my name is shubham')
    res.end()
    
})
server.listen(port)