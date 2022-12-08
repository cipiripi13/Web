// Global JavaScript Objects (homework)

// Math
// ● Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.

// function getRndInteger(min, max) {                      ova fukcija ce samo prikazati  jedan broj izmedju brojeva koji zadamo
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   var random = getRndInteger(1, 50);
//   console.log(random);                             

  var generatedNumbersArray = function(){
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var newArr = [];
      for(i=0; i<10; i++){
        var randomNumb = getRndInteger(1, 50);
        newArr[i]=randomNumb;
      }
      return newArr;
  }
  console.log(generatedNumbersArray());

/************************************************************************/
// II Nacin

function generateNumbers (arrayLength, minNumb, maxNumb){
    function getRndInterval(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var newArr=[];
      for(i=0; i<arrayLength; i++){
        var rn = getRndInterval(minNumb, maxNumb);
        newArr[i] = rn;
      }
      return newArr;
}
console.log(generateNumbers(5, 1, 30));

// ● Round
// Create a function that uses the passed array of numbers and rounds all its
// elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.




// var today = new Date ();
// console.log(today);