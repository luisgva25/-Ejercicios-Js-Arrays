function multiplicarpor2(arreglo){
    return arreglo.map(function(elemento){
        return elemento*2;
    })
}
console.log(multiplicarpor2([3,6,9,12]));