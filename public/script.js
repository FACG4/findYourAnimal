console.log('dsds');
document.getElementById('search').addEventListener('keydown', (event) => {
const keyName = event.target.value;
// alert(keyName.value);
console.log(event.target.value);


});
// document.onreadystatechange = function () {
//   if (document.readyState === 'complete') {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if(xhr.readyState === 4){
//         if (xhr.status === 200){
//           var data = JSON.parse(xhr.responseText);
//           for (var animal in data) {
//             var postDiv         = document.createElement('div');
//             var postText        = document.createElement('p');
//
//
//
//             postText.innerHTML = data[finding];
//             postDiv.className = "post";
//
//             postDiv.appendChild(postText);
//             postContainer.appendChild(postDiv);
//           }
//         }
//         else {
//           console.error(xhr.responseText);
//         }
//       }
//     }
//     xhr.open('GET', '/posts', true);
//     xhr.send();
//   }
// }
