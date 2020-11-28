const http = require('http')
const port  = 3000
const fs = require('fs')


const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('server.html',function(err,data){
        if(err){
            res.writeHead(404)
            res.write('Error: File not found')
        } else{
            res.write(data)
        }
        res.end()
    })
    
})

server.listen(port,function(err){
    if(err){
        console.log('got an error',err)
    }
    console.log('server is listening on port ' + port )
})