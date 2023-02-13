//Vanila JS --- noviji nacin
var ulElement = document.getElementById('list');
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json()) //ovde imamo metodu json na responsu
  //ovde je odg u stringu => vracamo ga zatim kao objekat u json-u
  .then(function(data){
    for( var i=0; i<data.length;  i++){
        var liElement = document.createElement('li');
        liElement.textContent = data[i].title;
        ulElement.appendChild(liElement);
      }
  });


//   fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then( function(response){
//     return response.json;
//   }).then(function(data){
//     console.log(data);
//   });