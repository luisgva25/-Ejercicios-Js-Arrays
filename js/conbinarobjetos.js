const combinarObjetos = (arr1, arr2) => arr1.map((obj, index) => ({...obj, ...arr2[index]}));

const arr1 = [{a: 1}, {a: 2}];
const arr2 = [{b: 3}, {b: 4}];
console.log(combinarObjetos(arr1, arr2)); 
