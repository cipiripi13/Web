// sve se pise sada unutar ovog wrappera kako bismo se osigurali za tacno izvodjenje koda i bezbedno ucitavanje html koda i time pravilno funkcionisanje jer ce se scripta loadovati tek nakon sto se ceo html ucita

$(function(){

    var allDivELements = $('div'); //selektuje sve divove
    allDivELements.toggleClass('active'); // toggle dodeljuje klasu

    
    
    
    $('li').click(function(){
        $(this).remove();  // na svaki klik ukloni taj element
    });



    // selektujemo elemente preko css selektora uvek
// uvode se i neki jquery selektori
// :not('selector') --- npr selektuj sve sto nemaju tu i tu klasu
// svaki elem koji se vrati nakon selektovanja sad je jquery objekat a ne native js node
// uvek kad selektujemo vratice nam se lista svih elem isvaki elem ima svoj index ne samo jedan kao u native js

//postoje razne metode koje mozemo da koristimo nad tim objektima kojinam se vrate nakon selektovanja
// taj obj ima array like structure--- lici na niz ali nije, zapravo je objekat

console.log($('div').html()); // cao-varti samo prvi u stringu
console.log($('body').html()); // vraca celu strukt str u stringu
console.log($('div').text());  // vraca sav tekst iz divova


//nema potreba vise za petljama jer jquery sada selektuje odjednom sve elemente
// npr.svi ce dobiti klasu cim ih selektujemo
// $(li).addClass('favorite')

$('ul').delay(500).fadeOut(1500).delay(500).fadeIn(1500);
//nestace pa se ponovo pojavi

//kada uvodimo promenljive koje se odnose najquery promenljivu imenujemo na sl nacin
//var $ul = $('ul'); tako svaki put kada je pozovemo znamo da se odnosi na jquery promenljivu

//kreiranje novog ele
var li = $('<li></li>');
li.text('Some content');
// posle dodajemo na el na koji zelimo

//SETOVANJE ATRIBUTA
// attr();  mozemo i da setujemo i da procitamo atribut iz elementa

var $newLi = $('<li>');
$newLi.text('Novi element');
$newLi.addClass('test-class'); //dodajemo klasu
$newLi.attr('id', 'test-id'); //setujemo nov id nad elem

$('li:last').after($newLi);


var $allLiE = $('li');
$allLiE.each(function(i, element){
    console.log(i);
})

$allLiE.each(function(i, element){
    var $jQ = $(element);
    // return false //imitira break
    // return true // imitira continue
    console.log($jQ.text());
})

});






