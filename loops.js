
//---------Iteración#1



const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i=0; i<products.length; i++) {
    if (products[i].includes("Camiseta")){
        console.log(products[i]);
    }
}

//---------Iteración#2

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach(alumn => {
    alumn.isApproved = (alumn.T1 && alumn.T2) || (alumn.T1 && alumn.T3) || (alumn.T2 && alumn.T3);
});

console.log(alumns);



//---------Iteración#3

const lugares = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let lugar of lugares) {
    console.log(lugar); 
}


//---------Iteración#4

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const propiedad in alien) {
    if (alien.hasOwnProperty(propiedad)) {
      console.log(propiedad + ': ' + alien[propiedad]);
    }
}

for(data in alien){
    console.log(`${data} : ${alien[data]}`);
}

//---------Iteración#5

let placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let i=0; i<placesToTravel.length; i++) {
    if (placesToTravel[i].id == 11 || placesToTravel[i].id == 40){
        placesToTravel.splice(i, 1);
}


    if(placesToTravel[i].id == 11 || placesToTravel[i].id == 40){
        placesToTravel.splice(i, 1);
        i--; //al eliminar un objeto, retrocedemos en el índice para no saltar items
    }
}
console.log(placesToTravel);

//---------Iteración#6

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

const toysNoCat = [];

    for (const toy of toys) {
      if (!toy.name.includes('gato')) {
        toysNoCat.push(toy);
      }
    }
    
    console.log(toysNoCat);

    //---------Iteración#6