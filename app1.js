const http = require('http')
const port = 3000
const fs = require('fs')

const server = http.createServer((req, res)=>{ 
    const url = req.url
    const method = req.method
    if(url == '/'){
        fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.error(err)
            }
            console.log('data from file'+data)
            res.write('<html>')
        res.write('<head><title>my responses</title></head>')   
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>') 
        res.write('</html>')
        return res.end()
            
        });
        
    }
    if(url==='/message' && method==='POST'){
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)
        });
        return req.on('end',()=>{
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            })
            
            
        })
        
        
    }
    
                   
    
})
server.listen(port)