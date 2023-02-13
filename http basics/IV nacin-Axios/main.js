// axios sluzi samo za komunikaciju sa serverom
// da bi radilo ucitati cdn isto kao u jquery...

//const axios = require('axios');

var ulElement = document.getElementById('list');

// Make a request for a user with a given ID
axios.get("https://jsonplaceholder.typicode.com/todos/")
  .then(function (response) {
var todos = response.data; //iz odgovora citamo data- podatke koje vraca i nesto radimo sa njima
//console.log(todos);
    todos.forEach(function(todo){
        var liE = document.createElement('li');
        liE.textContent = todo.title;
        ulElement.appendChild(liE);

    })
    
    // handle success
    //console.log(response);
  })


//   .catch(function (error) { //ovaj deo za sada ne koristimo
//     // handle error
//     console.log(error);   
//   })
//   .then(function () {
//     // always executed
//   });