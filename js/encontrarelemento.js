function encontrarObjeto(arr, propiedad, valor) {
    return arr.find(objeto => objeto[propiedad] === valor);
}

const objetos = [
    { nombre: "juan", edad: 25, estatuta: 1.76},
    { nombre: "ana", edad: 30, estatuta: 1.49},
    { nombre: "pedro", edad: 40, estatuta: 1.98}
];
console.log(encontrarObjeto(objetos, "nombre", "ana")); 