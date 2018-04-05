// requier fs module
var fs = require('fs');
// requier querystring module
var queryString = require('querystring');
const path=require('path');
let reqPath=path.join(__dirname,'../');
var fileData;



fs.readFile(__dirname+'/Data/data.json','utf-8',function(error,file){
if(error){
console.log(error);
return;
}else {
fileData=file;
}

})


// create function handller
function handler(request,response){
var endpoint=request.url;
console.log(endpoint);

if(endpoint == '/'){
response.writeHead(200,{'Content-Type':'text/html'})
fs.readFile(reqPath+'/public/index.html',function(error,file){
if(error){
console.log(error);
return;
}
response.end(file);
})
}else if(endpoint == '/style.css'){
    response.writeHead(200,{'Content-Type':'text/css'})
        fs.readFile(reqPath+'/public/style.css',function(error,file){
        if(error){
        console.log(error);
        return;
        }
        response.end(file);
        })
}else if(endpoint == '/js/logic.js'){
    response.writeHead(200,{'Content-Type':'text/javascript'})
        fs.readFile(reqPath+'/public/js/logic.js',function(error,file){
        if(error){
        console.log(error);
        return;
        }
        response.end(file);
        })
}else if(endpoint == '/js/dom.js'){
    response.writeHead(200,{'Content-Type':'text/javascript'})
        fs.readFile(reqPath+'/public/js/dom.js',function(error,file){
        if(error){
        console.log(error);
        return;
        }
        response.end(file);
        })
}else if(endpoint == '/script.js'){
    response.writeHead(200,{'Content-Type':'text/javascript'})
        fs.readFile(reqPath+'/public/script.js',function(error,file){
        if(error){
        console.log(error);
        return;
        }
        response.end(file);
        })
}else if(endpoint == '/image/baa.jpg'){
    response.writeHead(200,{'Content-Type':'image/jpeg'})
        fs.readFile(reqPath+'/public/image/baa.jpg',function(error,file){
        if(error){
        console.log(error);
        return;
        }
        response.end(file);
        })
}



else if(endpoint == '/data'){
//    var json = JSON.stringify({data: fileData});
   response.end(fileData);
}

}

// module export
module.exports=handler;
