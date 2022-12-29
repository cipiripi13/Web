//console.log(x);
let age;
console.log(age, age + 3); //undefined NaN-not a number

 age = null;
console.log(age, age + 3);  //null, 3


//PRIMERI ZA KONKATENACIJU
//MOZE UZ POMOC " " PA + VREDNOST
// ILI `` I $ {}
var x = 8;
var y;
console.log('Vrednost promenljive x je : ' + x);

console.log(`Vrednost promenljive x je: ${x}`);


 x = 5;
 y = 7;
x = x + y;
console.log(x);  //x=12, y=7;

//racunanje ide sa desne strane
//uvek se prvo racuna vrednost iza = pa se upisuje sa leve str u promenljivu

x *= 5;  //skr od x=x*5 //60
y -= 2;  // skr od y=y-2 //5
console.log(x);
console.log(y);
console.log(`vrednost promenljiv x je = ${x} i vrednost y je ${y}`);

let kl;
let u = 33;
let dl = 4;
 kl = u % dl;
console.log(kl);
console.log(7%2);
console.log(87%4);

var st;
var dd=2;
//d = 2;
st = dd ** 2;
console.log(st);