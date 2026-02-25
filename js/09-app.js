const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio : 300, 
    disponible : true,
}

//Combinacion de de dos objetos

const medidas = {
    peso : '1kg',
    medida : '1m', 
}

console.log(producto);
console.log(medidas);

//Usando metodo assign
const resultado = Object.assign (producto, medidas);
console.log(resultado);

//Usando otro metodo llamado Spread Operator o Rest operator
const resultado2 = {...producto, ...medidas}
console.log(resultado2);