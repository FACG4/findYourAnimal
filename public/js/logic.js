function connect(url,cb){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var responce=JSON.parse(xhr.responseText);
        cb(responce);
      }
    };
    xhr.open("GET", url);
    xhr.send();
  
}

function select(selector){
  return document.querySelector(selector);
    
}

function create(created){
    return document.createElement(created);
}

if (typeof module !== 'undefined') {
module.exports={connect,select,create
}
}