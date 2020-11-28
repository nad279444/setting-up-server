const http = require('http')
const port  = 3000


const server = http.createServer(function(req,res){
    res.write('Hello Node')
})

server.listen(port,function(err){
    if(err){
        console.log('got an error',err)
    }
    console.log('server is listening on port ' + port )
})