
// Arrow functions

const sumar2 = (n1, n2) =>  console.log(n1 + n2);
sumar2(10, 15);

const aprendiendo = (tecnologia) =>  console.log(`Aprendiendo ${tecnologia}`)
aprendiendo(`JavaScript`)



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

//forEach

meses.forEach((mes) => {
    if(mes = 'Marzo ') {
        console.log('Marzo si existe');
    }
});

let resultado;

// Some ideal para arreglo de objetos (buscar un objeto)
resultado = carrito.some((producto) => producto.nombre == 'Audifonos')

// Reduce sumar total carrito de compras 
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter((producto) => producto.precio > 400); // productos mat¡yores a 400 si ya queremos menores usamos el simbolo <
resultado = carrito.filter((producto) => producto.nombre !== 'Celular iphone'); // y para buscar algo diferente a celular se pone !==
console.log(resultado);