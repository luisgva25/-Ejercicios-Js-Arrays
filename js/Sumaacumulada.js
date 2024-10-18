const sumaAcumulada = (arr) => arr.reduce((acumulado, num) => acumulado + num, 0);

const numeros = [1, 2, 3, 4, 6, 7, 8];
console.log(sumaAcumulada(numeros));
