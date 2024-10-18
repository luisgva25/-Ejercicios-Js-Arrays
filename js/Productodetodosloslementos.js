const productoTotal = (arr) => arr.reduce((producto, num) => producto * num, 1);

const numeros = [1, 2, 3, 4];
console.log(productoTotal(numeros)); 
