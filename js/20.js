// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = sumar( 2, 3);

// console.log(resultado);

let total = 0
function agregarCarrito (precio) {
    return total += precio;
}

function calcularImpuesto (total) {
    return 1.19 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(800);
total = agregarCarrito(280);
total = agregarCarrito(350);
total = agregarCarrito(190);
total = agregarCarrito(210);
total = agregarCarrito(790);


console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuesto es de: $${totalAPagar}`);

