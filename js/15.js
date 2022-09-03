//arreglos segunda parte

const numeros = [10,20,30,40,50];
console.table(numeros);

numeros.push(60,70,80,90,100,110); // al final del arreglo

numeros.unshift(-10, -20, -30, -40); // al inicio del arreglo

console.table(numeros);

const jugadoras = ['Alexia', 'Aitana', 'Irene', 'Patri', 'Mariona'];
// console.table(jugadoras);

// jugadoras.pop(); // elimina el ultimo elemento
// jugadoras.shift(); // elimina el primer elemento
// console.table(jugadoras);

// jugadoras.splice(2 ,2); // primer numero posicion, segundo numero elementos a eliminar (irene, patri)
// console.table(jugadoras);

//Rest operator o spread operator

const nuevoArreglo = ['Graham',...jugadoras];
console.table(nuevoArreglo);