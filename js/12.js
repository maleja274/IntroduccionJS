// "use strict"; // correr Js en modo estricto
// objetos

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


Object.seal(producto);

producto.nombreProducto = "alexia putellas";

delete producto.nombreProducto;

console.log(Object.isFrozen(producto));
console.log(producto);