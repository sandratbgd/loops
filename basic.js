
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