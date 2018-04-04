var fs=require('fs');
var path=require('path');
var querystring =require('querystring');
function handler(req,res){
    var endpoint=req.url;
    console.log(endpoint);
    if(endpoint=='/'){
        fs.readFile(path.join(__dirname,'../','/public/index.html'))

    }
}