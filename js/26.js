const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Telefono fijo', precio: 150},
    {nombre: 'Tablet Samsung', precio: 200},
    {nombre: 'Audifonos', precio: 250},
    {nombre: 'Mouse inalambrico', precio: 300},
    {nombre: 'Celular iphone', precio: 350},
    {nombre: 'Laptop', precio: 400},
    {nombre: 'Reloj inteligente', precio: 450},
    {nombre: 'Nevera', precio: 550},
    {nombre: 'Lavadora', precio: 600},
    {nombre: 'Horno tostador', precio: 650},
];

// ForEach

// carrito.forEach((producto)=> console.log(producto)); // cuando quieras iterar sobre un arreglo o enviar los elementos a la consola o mostar los elementos en pantalla.


// // map
// carrito.map((producto)=> console.log(producto)); //cuando se quiere crear un nuevo arreglo.


//ejemplo: nuevo arreglo

const arreglo1 = carrito.forEach(producto => producto.nombre);

// console.log(arreglo1);

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);



