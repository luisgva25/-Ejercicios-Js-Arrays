const contarOcurrencias = (arr, valor) => arr.reduce((cont, item) => item === valor ? cont + 1 : cont, 0);

const valores = [1, 2, 2, 3, 2, 4];
console.log(contarOcurrencias(valores, 2)); 
