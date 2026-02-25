const producto = {
    nombre : "Monitor de 20 Pulgadas", //No se utiliza (=) para asignar valores sino (:)
    precio : 300, //Los elementos se separan con (,) en lugar de (;)
    disponible : true,
    //imagen : 'imagen.png',
}

//const nombre = producto.nombre // Forma antigua
//console.log (nombre);

// Empleando Destructuring
const {nombre, precio, noExiste} = producto; //Extrae el valor del objeto y crea la variable
//const {precio} = producto; // O puedo incluir precio en sentencia anterior
console.log (nombre);
console.log (precio);
console.log (noExiste);// Lanza error por indefinido