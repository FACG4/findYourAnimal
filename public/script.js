document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          document.getElementById('search').addEventListener('keyup', (event) => {

            var postContainer = select('.reuslt');
            postContainer.innerHTML = "";
            const keyName = event.target.value;

            function filterItems(query) {
              return data.filter(function(e) {
                return e.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
              });
            }
            Filterdata = filterItems(keyName)
            console.log(Filterdata);

            for (var animal in Filterdata) {
              var postDiv = document.createElement('a');

              var postImg = document.createElement('img');

              postDiv.textContent = Filterdata[animal].Name;

              postDiv.setAttribute("id", postDiv.textContent);
              postDiv.setAttribute("href", '#popup1');

              postDiv.value = Filterdata[animal].Name;

              postImg.src = Filterdata[animal].ImageURL;
              postContainer.appendChild(postDiv);
              postDiv.appendChild(postImg);
              const element = document.getElementById(postDiv.id);
              element.addEventListener("click", function(e) {

                console.log(e.target.id)
                var url = "https://en.wikipedia.org/w/api.php?action=query&titles=" + e.target.id + "&images&imlimit=20&format=json";

                postContainer.classList.toggle("disable");
                select(".search").value = "";



                function connect1(res) {
                  var obj = res.query.pages;
                  var x = obj[Object.keys(obj)[0]].pageid;

                  var newUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=' + x + '&inprop=url&format=json';
                  connect(newUrl, function(resp) {
                    var obj = resp.query.pages;
                    var fullPageSrc = obj[Object.keys(obj)[0]].fullurl;
                    var iframe = create('iframe');
                    select('.content').appendChild(iframe).src = fullPageSrc;
                    iframe.setAttribute("id", "iframe");
                    iframe.setAttribute("name", "iframe");
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("width", "100%");
                    iframe.setAttribute("height", "480px");




                  });
                }
                connect(url, connect1);


              });
            }
            postContainer.classList.remove("disable");


          });

        } else {
          console.error(xhr.responseText);
        }
      }
    }
    xhr.open('POST', '/data', true);
    xhr.send();
  }
}
