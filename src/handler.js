// requier fs module 
var fs = require('fs');
// requier querystring module
var queryString = require('querystring');
const path=require('path');
let reqPath=path.join(__dirname,'../');

// create function handller
function handller(request,response){
    var endpoint=request.url;
    if(endpoint == '/'){
        response.writeHead(200,{
            'Content-Type':'text/html'
        })
        fs.readFile(reqPath+'/public/index.html',function(error,file){
            if(error){
                console.log(error);
                return;
            }
            response.end(file);
        })
    }
    else if (endpoint=='/finding'){
        var allTheData='';
        request.on('data',function(chunkdata){
            allTheData+=chunkdata;
        })
        request.on('end',function(){
            console.log(allTheData);
            var convertedData=queryString.parse(allTheData);
            console.log(convertedData);
            response.writeHead(302,{
                'location':'/'
            })
            response.end();
        })

    }
}





// module export
module.exports=handller;