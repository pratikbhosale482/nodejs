//file system module require
const fs= require("fs");
// display browser
    const http = require("http");
    const server= http.createServer(function(req,res){
//file read
fs.readFile(__dirname+"/moviejson.txt", "utf8",(err,data)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write(data);
    res.end();      

});
    }) .listen(8888,()=>console.log("Server Running On Port 8888"));
