const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio : 300, 
    disponible : true,
}

console.log(Object.keys(producto)); // Retorna solo la parte derecha. Variables

console.log(Object.values(producto)); //Retorna la parte izquierda. Los valores

console.log(Object.entries(producto));// Retorna los valores como pares, arrays