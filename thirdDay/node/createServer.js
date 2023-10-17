// core modules

// http,path,os,filessystem,url

var http = require('http')

http.createServer(function(req,res){
    res.write('Hello User your port 3000 is connected ')
    res.end()
}).listen('3000')