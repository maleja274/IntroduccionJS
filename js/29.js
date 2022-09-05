// Clases

// ejemplo 1
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor curvo 49 pulgadas', 800);
const producto3 = new Producto('Celular Xp', 1800);

console.log(producto2);
console.log(producto3);


// ejemplo 2
class Jugadora {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    formatearJugadora() {
        return `La Jugadora ${this.nombre} tiene un apellido el cual es ${this.apellido} `;
    }
}

const jugadora = new Jugadora ('Alexia', 'Putellas');

console.log(jugadora);


// ejemplo 3
class Libro {
    constructor (nombre, precio, isbn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    
    }
}

const libro = new Libro ( 'JavaScript la Revolucion', 1500, '51548541548');

console.log(libro);



