
    //---------Iteración#1. Buscar el máximo.
    // Completa la función que tomando dos números como argumento devuelva el más alto.

      function sum(numberOne, numberTwo) {
        if (numberOne > numberTwo) {
          return numberOne;
        } else {
          return numberTwo;
        }
      }
      console.log(sum(11, 25));

    //Iteración #2: Buscar la palabra más larga
    //Completa la función que tomando un array de strings como argumento devuelva el primero más largo.

    

    const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
        

      function findLongestWord(arrayAvengers) {
        
        let longestWord = '';
        arrayAvengers.find(word => {
        if (word.length > longestWord.length) {
                
                longestWord = word;
            }

            return false;
        });

        return longestWord;
    }
    
    const avengerMasLargo = findLongestWord(avengers);

    console.log(avengerMasLargo);

    const longestAvenger = findLongestWord(avengers);
    console.log(`La palabra más larga es: ${longestAvenger}`);

    /* Iteración #3: Calcular la suma
    Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Devuelve la suma de todos los números de la matriz. 


const numbers = [1, 2, 3, 5, 45, 37, 58];

let sumAll = numbers.reduce(
    function (acumulador, valorActual) {
        return acumulador + valorActual
    }, 0
)

console.log(sumAll);
*/

const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(numArray) {
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

    return sum;
}

const suma = sumAll(numbers);
console.log(suma);

/* Iteración #4: Calcular el promedio
Calcular un promedio es una tarea extremadamente común.
*/
const numeros = [12, 21, 38, 5, 45, 37, 6];

function average(arrayNum) {
    let sum = 0;

    for (let i = 0; i < arrayNum.length; i++) {
        sum += arrayNum[i];
    }

    const avg = sum / arrayNum.length;
  
    return avg;
}

const media = average(numeros);
console.log(media);

/* Iteración #5: Calcular promedio de strings
Crea una función que reciba por parámetro un array 
y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else if (typeof arr[i] === 'string') {
      count += arr[i].length;
    }
  }

    sumAverage = count++ + sum
    average = sumAverage/arr.length
    return average
}

const result = averageWord(mixedElements);
console.log(result);
