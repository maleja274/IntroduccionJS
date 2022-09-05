const metodoPago = 'nequi';

switch(metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
     case 'cheque':
        console.log('El usuario va a pagar con cheque, revisar fondos');
        break;
    case 'efectivo':
        console.log('pagaste en efectivo');
        break;
    case 'nequi':
        console.log('pagaste con transferencia o nequi');
        break;
    default:
        console.log('aun no has pagado');
        break;
}