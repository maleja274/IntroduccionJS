const producto = {
    nombreProducto : "Monitos 20 pulgadas",
    precio: 300,
    disponible: true
}


// forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;


// console.log(precioProducto);
// console.log(nombreProducto);


//destruturing
const {precio, nombreProducto } = producto;






console.log(precio);
console.log(nombreProducto);
