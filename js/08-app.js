"use strict"; 

const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio : 300, 
    disponible : true,
}

Object.seal(producto); 

producto.disponible = false; // El metodo Object.seal permite la modificacion de las propiedades del objeto
console.log(producto);

//delete producto.precio;// El metodo seal no permite eliminar propiedades
//producto.imagen = 'imagen.jpg'; //con metodo seal no esta permitido agregar nuevas propiedades


console.log(Object.isSealed(producto));//Reviso si metodo seal esta activo
