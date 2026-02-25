const producto = {
    nombre : "Monitor de 20 Pulgadas", //No se utiliza (=) para asignar valores sino (:)
    precio : 300, //Los elementos se separan con (,) en lugar de (;)
    disponible : true,
}

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Misma funcion pero menos comun
console.log(producto['nombre']);
