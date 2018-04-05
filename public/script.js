

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
          if (xhr.status === 200){
            var data = JSON.parse(xhr.responseText);
            document.getElementById('search').addEventListener('keyup', (event) => {
                var postContainer   = select('.reuslt');
                postContainer.innerHTML="";
                const keyName = event.target.value;
                function filterItems(query) {
                    return data.filter(function(e) {
                    return e.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
                });
            }
                Filterdata =filterItems(keyName)
                console.log(Filterdata);

                    for (var animal in Filterdata) {
                        var postDiv         = document.createElement('p');
                        var postImg         = document.createElement('img');

                        postDiv.textContent = Filterdata[animal].Name;
                        postImg.src=Filterdata[animal].ImageURL;
                        postContainer.appendChild(postDiv);
                        postDiv.appendChild(postImg);
                    }

                });

          }
          else {
            console.error(xhr.responseText);
          }
        }
      }
      xhr.open('POST', '/data', true);
      xhr.send();
    }
  }
