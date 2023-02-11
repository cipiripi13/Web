// Use Dog API
// You can find the documentation for this API at https://dog.ceo/dog-api/
// Check out the documentation to see how to use this API
// Create a function which is sending request via AJAX and getting data in JSON format
// When data is received from the server, extract image url, and use that url to create
// image element and add it to html page.
// There is a button on HTML page!
// Each time when user click the button this function for getting image data is invoked and
// new picture is added to the page.

var button = document.getElementById('button');
var request = new XMLHttpRequest();
// console.log(newXHR);
// console.log(newXHR.open);

request.open('GET', 'https://dog.ceo/dog-api/', true);

function getDogImage() {
    var xhr = new XMLHttpRequest();
    //console.log(xhr);
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            //console.log(response);
            var imageUrl = response.message;
            //console.log(imageUrl);
            var image = document.createElement("img");
            image.setAttribute('src', imageUrl);
            document.querySelector('body').appendChild(image);
        } else {
            console.error("An error occurred: " + xhr.status);
        }
    };
    xhr.send();
};
var button = document.getElementById("button");
button.addEventListener("click", getDogImage);














