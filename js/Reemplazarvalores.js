const reemplazarNegativos = (arr) => arr.map(num => num < 0 ? Math.abs(num) : num);

const numeros = [-1, 2, -3, 4];
console.log(reemplazarNegativos(numeros)); 
