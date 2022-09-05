// programacion orientada a objetos

/** Object literal */
const producto = {
    nombre:'Tablet',
    precio: 500
}

// Object constructor 

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio, propiedad) {
    this.nombre = nombre;
    this.precio = precio;
    this.propiedad = propiedad;
}

// crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo 49 pulgadas', 800, true);
const producto3 = new Producto('Celular Xp', 1800, true);
const producto4 = new Producto('Laptop mac', 900, false);
const producto5 = new Producto('Audifonos pro', 700, false);
console.log(producto2);


const cliente = new Cliente('Alejandra', 'Monroy');
console.log(cliente);



function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}



console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );
console.log(producto4.formatearProducto() );
console.log(producto5.formatearProducto() );
console.log(cliente.formatearCliente() );




