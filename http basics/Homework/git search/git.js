// Create a page that contains a logo and a search box (as shown on the mock)
// The page is initially empty (there are no listed users)
// The user can input some text in the search box
// When the user clicks enter, a request is sent using jQuery Ajax API
// The request is sent to GitHub’s endpoint for searching users
// Documentation can be found at https://developer.github.com/v3
// Try to find URL and structure of a request for searching users
// When a response is received, print an image and a username on the page for all the
// users in the response

function getUser(){
    var xml = new XMLHttpRequest();
    xml.open('GET',  "https://api.github.com/users", true)
    console.log(xml);

    xml.send();



//     fetch("https://api.github.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (todos) {
//     // todos.forEach(function (todo) {
//     //   var liEl = document.createElement('li');
//     //   liEl.textContent = todo.title;
//     //   listEl.appendChild(liEl);
//     // });

//     console.log(todos);
//   });
  
}
var button = document.getElementById('button');
button.addEventListener('click', getUser)







// Part II
// Build upon previous part of exercise (GitHubSearcher) and add additional features.

// Each user in the list is clickable.
// When user clicked new content (or new page) is presented.
// Show all github repositories of selected user (in list of grid).
// When showing repository you should present:
// ● Repository name
// ● Repository image, or some placeholder if there is no picture
// ● Description
// ● Number of start
// API documentation for GitHub repositories: https://developer.github.com/v3/repos/


