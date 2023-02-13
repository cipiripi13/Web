//primeri sa casa

console.log('test 1');
console.log('test 2');

setTimeout(function() {
    console.log('test 3');

},500)
console.log('test 4');

//primer asinhronosti js
//ucitace se sve skripte redom ali setTimeout ce se izvrsiti nakon zadatog vremena

//ovo ce biti odgovor u konzoli
// test 1
// test 2
// test 4
// test 3