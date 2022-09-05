// promise

const usuarioAutenticado = new Promise ((resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesion'); // El promise no se cumple
    }
});

usuarioAutenticado
     .then((resultado) => console.log (resultado))
     .catch((error) => console.log(error))
    

// En el promise existen tres valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir