
const express = require("express");
const app = express();

/*app.get('/posts',(request,response)=>   {
    response.send({
        name:"pratik"
    })
})*/
app.get('/flower',sendFlower);
function sendFlower(request, response){
    response.send("I love flowers");
}


app.listen(8888, function(){
    console.log("Server is runnig on port 8888")
})