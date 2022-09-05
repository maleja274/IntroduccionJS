// for loop

// for( let i = 0; i < 100; i++ ) {
//     console.log(i);
// }

// for( let i = 1; i < 100; i++ ) {
//     if (i % 2 === 0 ) { 
//         console.log(`El numero ${i} es PAR`);
//     }else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }
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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}


// while loop  // primero se revisa si se cumple la condicion y despues ejecuta si cumple

// let i = 0;   // indice

// while (i < 10) {  //condicion

//     if ( i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
      
//     i++;   //incremento
// }


// // error al ejecutar por ser el numero mayor
// let i = 20;   // indice

// while (i < 10) {  //condicion
//         console.log(`Desde el while loop`);
  
      
//     i++;   //incremento
// }


// //ejemplo para el carrito de compras 
// let i = 0;   // indice

// while (i < carrito.length) {  //condicion
    
//     console.log(carrito[i].nombre);
  
//     i++;   //incremento
// }


//do while loop //en el do while se ejecuta el codigo al menos una vez asi no se cumpla la condicion

let i = 0;  

do {

    console.log(i);

    i++;
}while( i < 10);

