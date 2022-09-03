//arreglos

const numeros = [10,20,30,40,50];

console.table(numeros);

const jugadoras = new Array('Alexia', 'Aitana', 'Irene', 'Patri', 'Mariona', 'Mapi');

console.table(jugadoras);

const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'Aleja', trabajo: 'contadora'}, [1,2,3]];

console.log(arreglo);

// acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(jugadoras[0]);
console.log(numeros[200]);

//conocer la extension de un arreglo
console.log(jugadoras.length); // cuantos elementos hay??

jugadoras.forEach( function(jugadora) {
    console.log(jugadora);
})
