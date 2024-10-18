const eliminarFalsy = (arr) => arr.filter(Boolean);

const valores = [0, "texto", false, null, 42, "", undefined];
console.log(eliminarFalsy(valores));
