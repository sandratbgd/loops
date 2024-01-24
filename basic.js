
//---------Iteración #1: Variables
let myFavoriteHero = "Hulk";
console.log(myFavoriteHero);

let x = 50;
let h = 5;
let y = 10;
let z = h + y;
console.log(z);

//---------Iteración #2: Variables avanzadas

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
let firstName = "Jon"; 
let lastName = "Snow"; 
let age = 24; 
console.log(`Soy ${firstName, lastName}, tengo ${age} y me gustan los lobos`);

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1.finalPrice);
console.log(car2.finalPrice);


//----------Iteración #3: Operadores

console.log(10*5);
console.log(10/2);
console.log(15%9)

p = 10
j = 5;
o = p + j;
console.log(o);

c = 10;
m = 5;
i = c * m;
console.log(i);

//------------Iteración #4: Arrays

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
avengers[0] = 'IRONMAN'
console.log(avengers[0]);
console.log(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty');
rickAndMortyCharacters.push('Summer');
console.log(rickAndMortyCharacters[4]);
// console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]); //

rickAndMortyCharacters.push('Lapiz Lopez');
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]);
//console.log(`${rickAndMortyCharacters[0]} y ${rickAndMortyCharacters[rickAndMortyCharacters.length - 1]}`); //

rickAndMortyCharacters.splice(1,1);;
console.log(rickAndMortyCharacters);


//-----------Iteración #5: Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 && number1*2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }
  
  if (number2/2 == number1 || number1/5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }

  //-----------Iteración #6: Bucles

  for (let i = 0; i <= 9; i++) 
    console.log(i);

  for (let i = 0; i <= 9; i++) {
          if(i%2 == 0) {
              console.log(i);    }
            }


            for(let i=0; i<10; i++){
              if(i<9){
                  console.log("Intentando dormir 🐑");
              }
              else{
                  console.log("Dormido!");
              }
          }
        
        
