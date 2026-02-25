const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio : 300, 
    disponible : true,
}

//Objeto constructor 
function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

//Asignando valores y ejecutanto objeto

const producto2 = new Producto ('Monitor 24 pulgadas', '300');
console.log(producto2);