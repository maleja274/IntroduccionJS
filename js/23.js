
// const puntaje = 1500;

// if(puntaje === 1000) {
//     console.log('si el puntaje es 1000');

// } else {
//     console.log('No es igual');
// }

// const efectivo = 1000;
// const carrito = 1800;

// if (efectivo > carrito) {
//     console.log('El usuario puede pagar');
// }

// else {
//     console.log('fondos insuficientes')
// }

const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
}

else if (rol === 'EDITOR') {
    console.log('Eres editor, puedes entrar pero no a todo el sistema')
}

else {
    console.log('No tienes acceso')
}