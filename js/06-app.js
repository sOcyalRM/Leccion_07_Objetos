const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio : 300, 
    disponible : true,
    informacion : {
        peso: '1kg',
        medida: '1m',
        fabricacion : {
            pais: 'China',
        }
    },
    
}

//Para Destructuring anidada 
const {nombre, precio, informacion:{peso} } = producto;

console.log(nombre);
console.log(peso);
//console.log(informacion);//se presenta un error porque peso es la el dato de informacion que se extrae
const {informacion, disponible} = producto;
console.log(informacion);

const {informacion:{fabricacion, fabricacion:{pais}}} = producto;
console.log(pais);
console.log(fabricacion);