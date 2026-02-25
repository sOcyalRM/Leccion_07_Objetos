"use strict"; //Le da un caracter estricto al codigo evita declarar vari sin tipo, entre otros

const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio : 300, 
    disponible : true,
}

Object.freeze(producto); //Este metodo evita la reasignacion de valores de objeto const producto

//producto.disponible = false; // El metodo Object.freeze provoca error en esta linea
console.log(producto);
console.log(Object.isFrozen(producto));
/*
x = 'soy una variable declarada sin tipo';
console.log(x); //Con "use strict" activo, esta linea lanza un error*/

