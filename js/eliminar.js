function eliminarDuplicados(arr) {
    let unicos = [];
    for (let num of arr) {
        if (!unicos.includes(num)) {
            unicos.push(num);
        }
    }
    return unicos;
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4]));
