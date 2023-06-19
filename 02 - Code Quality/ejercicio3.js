/*  before improving it with Chat GPT 

function complicatedLevelThree(obj) {
   var result = '';
   var keys = Object.keys(obj);
   var values = Object.values(obj);
   var sum = values.reduce((acc, curr) => acc + curr, 0);

   for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = values[i];
      if (value % 2 === 0) {
         result += key + ' is even. ';
      } else {
         var temp = value;
         while (temp > 0) {
            result += key + ', ';
            temp--;
         }
      }
   }

   var finalResult = '';
   var count = 0;
   while (count < sum) {
      finalResult += result;
      count++;
   }

   var reversedResult = finalResult.split('').reverse().join('');
   var formattedResult = reversedResult.toUpperCase();

   return formattedResult;
} */


/**
 * Calcula un resultado complicado basado en un objeto.
 *
 * @param {Object} obj - Objeto con claves y valores.
 * @returns {string} - El resultado calculado en formato de cadena en mayúsculas.
 * @throws {TypeError} - Si el parámetro `obj` no es un objeto válido.
 */
function calculateComplicatedResult(obj) {
   if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      throw new TypeError('El parámetro `obj` debe ser un objeto válido.');
   }

   let result = '';
   let keys = Object.keys(obj);
   let values = Object.values(obj);
   let sum = values.reduce((acc, curr) => acc + curr, 0);

   for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = values[i];
      if (value % 2 === 0) {
         result += key + ' is even. ';
      } else {
         for (let temp = value; temp > 0; temp--) {
            result += key + ', ';
         }
      }
   }

   let finalResult = '';
   let count = 0;
   while (count < sum) {
      finalResult += result;
      count++;
   }

   let formattedResult = finalResult.split('').reverse().join('').toUpperCase();

   return formattedResult;
}


var obj = {
   a: 2,
   b: 3,
   c: 4,
   d: 5,
};

console.log(calculateComplicatedResult(obj));
