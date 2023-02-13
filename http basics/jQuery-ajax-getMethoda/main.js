// da bi ova metoda radila ucitavo jquery link preko cdn-a

//Jquery 
$.get( 'https://jsonplaceholder.typicode.com/todos/', function( data ) {
    console.log ( data );  //sada u konzoli vec dobijamo js objekte
    // sto znaci da ova metoda get u jquery vec za nas obavi sav posao i pretvori string u objekte...
    // sve se to desava ia zavese i za nas parsira ceo string u objekat
  });

  // prvi parametar url                 // drugi cela funkcija koja nam kaze sta da radimo sa podacima kada nam se vrate


  var ulElement = document.getElementById('list');
  //console.log(ulElement);

//   $.get('https://jsonplaceholder.typicode.com/todos/', function(toDo){
//     toDo.forEach(function(e) {
//         var liE = document.createElement('li');
//         liE.textContent = e.title;
//         ulElement.appendChild(liE);
        
//     });
//   })

$.get("https://jsonplaceholder.typicode.com/todos/", function(data){
    console.log(data.length);
})
// II nacin obicnom for umesto foreach petljom
$.get("https://jsonplaceholder.typicode.com/todos/", function(data){
    for(i=0; i<data.length; i++){
       //console.log(data[i].title);
       var liE = document.createElement('li');
       liE.textContent = data[i].title;
       ulElement.appendChild(liE);
    }
})