const obtenerNombres = (arr) => arr.map(obj => obj.nombre);

const personas = [{nombre: "toño", edad: 25}, {nombre: "Luis", edad: 19}];
console.log(obtenerNombres(personas)); 
