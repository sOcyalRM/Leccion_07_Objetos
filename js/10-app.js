nombre = 'Monitor'; //Estas son variables globales
precio = '3000';    //Sus valores son tomados por cualquier funcion u objeto 
const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio : 300, 
    disponible : true,

    mostrarInfo: function(){ //Utilizar this para obtener los valores del mismo objeto
        console.log(`El producto: ${this.nombre}, tiene un precio de: ${this.precio}`); 
    }
}

console.log(producto.mostrarInfo())