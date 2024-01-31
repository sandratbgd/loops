
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

    sumAverage = (sum + count++) / arr.length
    return sumAverage
}

const result = averageWord(mixedElements);
console.log(result);

/* Iteración #6: Valores únicos
Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. 
*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(array) {
  const uniqueArray = [];

  for (const item of array) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

const resultado = removeDuplicates(duplicates);
console.log(resultado);

/* **Iteración #7: Buscador de nombres**

Comprueba si existe un elemento en el array, en caso que existan nos devuelve un true 
y la posición de dicho elemento y por la contra un false. 
*/
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(name) {
  if (nameFinder.includes(name)) {
    return `${true}, ${name} ocupa la posición ${nameFinder.indexOf(name) + 1}`;
    
  } else {
    return false;
  }
}
console.log(finderName('Marc')); 
console.log(finderName('Charlie'));


/*Iteration #8: Contador de repeticiones**
Crea una función que nos devuelva el número de veces que se repite 
cada una de las palabras que lo conforma.  
*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(counterWords) {
  const counter = {};

  for (const word of counterWords) {
    if (counter[word]) {
      
      counter[word]++;
    } else {
      // Si la palabra no está en el contador, agrega la palabra al contador con un contador de 1
      counter[word] = 1;
    }
  }

  return counter;
}

const contador = repeatCounter(counterWords);
console.log(contador);