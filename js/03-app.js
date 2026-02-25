const producto = {
    nombre : "Monitor de 20 Pulgadas", //No se utiliza (=) para asignar valores sino (:)
    precio : 300, //Los elementos se separan con (,) en lugar de (;)
    disponible : true,
    //imagen : 'imagen.png',
}

// Agregar nuevas propiedades al objeto desde fuera 

producto.imagen = 'imagen.png'; //Nueva ves se puede utilizar asignacion(=), y punto coma (;)

//Eliminar propiedades del objeto 
delete producto.disponible;

console.log (producto)
