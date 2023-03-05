//primeri sa casa

// console.log('test 1');
// console.log('test 2');

// setTimeout(function() {
//     console.log('test 3');

// },500)
// console.log('test 4');

//primer asinhronosti js
//ucitace se sve skripte redom ali setTimeout ce se izvrsiti nakon zadatog vremena

//ovo ce biti odgovor u konzoli
// test 1
// test 2
// test 4
// test 3


var ulElement = document.getElementById('list');
//VANILA JAVASCRIPT

//stari nacin u ajaxu ali nacin na koji sve novije do sada radi iza zavese

//inicijalizujemo novi objekat
// i to je ugradjena klasa, objekat koji nam vraca sve neke metode
var request = new XMLHttpRequest();


//priprema odgovora uz pomcu zeljenog metoda i adrese
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

//load properti ce se pokrenuti kada je odgovor na nas response ucitan bez greske
// i pisemo u funkciji sta ce se desiti onog trenutka kada ucitamo response
 request.onload = function(event){
//     //isto ugradjen properti 
    if(request.status === 200){
       console.log( typeof request.responseText); // vraca nam da je ovo sve jedan string
       // console.log (request.responseText);
//         // da bi mogli da se koristimo podacima pristupacemo od sada preko dve ugradjene metode
        var result = JSON.parse(request.responseText);
       console.log(typeof result); // preveli smo ga u objekat
       console.log(result);
       result.forEach(function(e){
            var newLiElement = document.createElement('li');
            newLiElement.textContent = e.title;
            ulElement.appendChild(newLiElement)
        });
    } else{
        throw new Error('something went wrong')
    }
 }
// //posalji zahtev onda kada smo pripremili sve kako treba
//
request.send();
