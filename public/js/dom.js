

 var url= "https://en.wikipedia.org/w/api.php?action=query&titles=spider&prop=images&imlimit=20&format=json";


function connect1(res){
    var obj=res.query.pages;
     var x = obj[Object.keys(obj)[0]].pageid;
     ;
     var newUrl= 'https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids='+x+'&inprop=url&format=json';
    //  console.log(x);
     connect(newUrl,function(resp){
        var obj=resp.query.pages;
        var fullPageSrc=obj[Object.keys(obj)[0]].fullurl;
        var iframe= create('iframe');
        var iframeBody = select('.mw-body');
        var innerDoc = iframeBody.contentDocument || iframeBody.contentWindow.document;
        select('.reuslt').appendChild(iframe).src=innerDoc;
        
         
     });
 }
 
 connect(url,connect1);