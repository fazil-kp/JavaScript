var a = require('http')
var b = require('url')

var c = a.createServer((req,res)=>{
    const urls=b.parse(req.url).pathname;
    console.log("****",urls);

    if(urls == '/'){   // localhost
    res.write("Home page")
    res.end()
    }else if(urls == '/anyname'){
        res.write('anyname page')
        res.end()
    }else if(urls == '/another'){
        res.write('another page')
        res.end()
    }else{
        res.write('Page not found')
        res.end()

    }

}).listen(3000)