/*     before improving it with Chat GPT 

function complicatedLevelTwo(array) {
   var result = array
      .map((x) => x * 2)
      .filter((x) => x % 3 === 0)
      .reduce((acc, curr) => acc + curr, 0);

   if (result > 1000) {
      var temp = result;
      for (var i = 0; i < 10; i++) {
         temp -= i;
         temp *= 2;
      }
      return temp;
   } else {
      var count = 0;
      while (count < 3) {
         result += count;
         count++;
      }
      var str = 'The final result is: ' + result;
      return str;
   }
} */

/**
 * Calcula un resultado complicado basado en un array de números.
 *
 * @param {number[]} numbers - Array de números.
 * @returns {string|number} - El resultado calculado.
 */
function calculateComplicatedResult(numbers) {
   let multipliedNumbers = numbers.map((number) => number * 2);
   let divisibleByThree = multipliedNumbers.filter((number) => number % 3 === 0);
   let sum = divisibleByThree.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

   if (sum > 1000) {
      let temp = sum;
      for (let i = 0; i < 10; i++) {
         temp -= i;
         temp *= 2;
      }
      return temp;
   } else {
      let count = 0;
      while (count < 3) {
         sum += count;
         count++;
      }
      let resultString = 'El resultado final es: ' + sum;
      return resultString;
   }
}


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateComplicatedResult(array));
