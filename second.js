var http=require('http');
var imp=require('./second_module');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(imp.myfun());
    res.end();
}).listen(2000);