const http = require('http')
const port  = 3000
const fs = require('fs')




const server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html')
    
        let path = './Docs/';
        switch (req.url) {
            case '/':
                path += 'server.html';
                res.statusCode = 200 
                break;
            case '/about':
                path+= 'about.html';
                res.statusCode = 200
                break;
            default:
                path+= '404.html';
                res.statusCode = 404
                break;
        }
        
        fs.readFile(path,function(err,data){
            if(err){
                console.log('got an error',err)
                res.end()
            } else{
                res.write(data)
                res.end()
            }
           
           
        })   
        
})

server.listen(port,function(err){
    if(err){
        console.log('got an error',err)
    }
    console.log('server is listening on port ' + port )
})