const estaVacio = (arr) => !Array.isArray(arr) || arr.every(() => false);

console.log(estaVacio([]));
console.log(estaVacio([1, 2, 3])); 
