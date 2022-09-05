// class-herencia

// ejemplo 1
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
    obtenerPrecio() {
        console.log (this.precio);
    }
}

const producto2 = new Producto('Monitor curvo 49 pulgadas', 800);
const producto3 = new Producto('Celular Xp', 1800);



// Herencia

class Libro extends Producto {
    constructor (nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()}  y su isbn es : ${this.isbn} `;
    }
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('y si hay en existencia');
    }
   
}

const libro = new Libro ( 'JavaScript la Revolucion', 1500, '51548541548');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());


