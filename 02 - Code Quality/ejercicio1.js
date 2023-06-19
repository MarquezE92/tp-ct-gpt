/*    before improving it with Chat GPT

function complicatedLevelOne(arr) {
   var result = 0;

   for (var i = 0; i < arr.length; i++) {
      result += arr[i];
   }

   if (arr[i] % 2 === 0) {
      result *= i;
   } else {
      result -= i;
   }

   return result;
}
 */

/**
 * Calcula la suma de los elementos de un array con una condición especial.
 *
 * @param {number[]} arr - Array de números.
 * @returns {number} - Suma resultante con la condición aplicada.
 */
function calculateSumWithCondition(arr) {
   let result = 0;

   for (let i = 0; i < arr.length; i++) {
      result += arr[i];

      if (arr[i] % 2 === 0) {
         result *= i;
      } else {
         result -= i;
      }
   }

   return result;
}

console.log(calculateSumWithCondition([3, 5, 2, 6, 3, 5]));
