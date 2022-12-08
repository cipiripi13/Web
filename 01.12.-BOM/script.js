var car1 = {
    color: 'red',
    name: 'BMW',
    year: 2016,
    model: 116
}

var car2 = {
    color: 'green',
    name: 'Audi',
    year: 2022,
    model: 'A7'
}

var colorOfCarOne = car1.color;
console.log(colorOfCarOne);

var colorOfCarTwo = car2.color;
console.log(colorOfCarTwo);

var nizKola = [car1, car2];
console.log(nizKola);

console.log(nizKola[0]);

var car3 = {
    color: 'red',
    name: 'BMW',
    year: 2016,
    model: 116,
    honk: function (){
        return 'bii biip';
    }
}

var play = car3.honk;  /*var play = car3.honk()*/
console.log(play());  /*Ovde smo je odmah pozvali a mogli smo i kod iznad */

console.log(window);

/*Unutar objekta moze se nalaziti i novi objekat*/

car1 = {
        color: 'red',
        name: 'BMW',
        year: 2016,
        model: 116,
        owner:{
            firstName: 'Jovana',
            lastName: 'Vucetic'
        },
        honk: function(){
            return 'biiip';
        }
    }

    // kako pozivamo objekt unutar objekta

    console.log(car1.owner.lastName);
    console.log(car1.honk());

    // function prikazi (){
    //     console.log('Dobrodosli u Js');
    // }
    // console.log(prikazi());

    // var poruka = function (){
    //     alert('Pozdrav');
    // }();
  

    //window.navigator
    function podaciPretrazivac (){
        return (navigator.geolocation); 
    }
    console.log(podaciPretrazivac());

    function namrezi(){
        if(navigator.onLine){
            return 'na mrezi';
        }
        
    };
    console.log(`Ovaj uredjaj je ${namrezi()}`);


  //window.screen
    function sirinaVisina (){
        var sirina = window.screen.width;
        var visina = window.screen.height;
        console.log(`${sirina} je sirina ovog ekrana i ${visina} ovog ekrana`);
        return sirina;
    };
    console.log(sirinaVisina());

   
   
    //window.location

    var urlAdresa = function(){
        return window.location.host;
    }();
    console.log(urlAdresa);

    var domenIme = function(){
        return window.location.hostname
    }();
    console.log(domenIme);

    var protokol = function(){
        return window.location.protocol;
    }();
    console.log(protokol);


    var deloviUrl = function(){
        return window.location.search;
    }();
    console.log(deloviUrl);

    //  var ponovoPokreni = function (){
    //    return window.location.reload();
    // }();
    // console.log(ponovoPokreni);

    // var novastr = function (){
    //     return window.location.replace("https://github.com/cipiripi13")
    // }();

//     Window Method


// ● Create a function that shows the user a greeting message using alert
function greetings (){
    alert ("Greetings from Js");
}
greetings();

// ● Then a question is presented to the user using prompt

function question (){
prompt("Would you like to continue?")
}
question();

// ● When the user provides the answer, that answer is used in the confirm
// dialog
// ● The format of the message in the dialog should be: &quot;We will submit this
// answer now! &quot; + the answer
// ● If the user clicks OK, show alert with success message
// ● If the user clicks Cancel, don&#39;t show anything

function x(){
    confirm('Are you sure you want to continue?')
    if(true){
        alert("We will submit this answer");
        alert ('Succes');
    } 
    return;

}
x();






