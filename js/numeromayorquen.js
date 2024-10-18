function todosMayoresQue(arr, n) {
    return arr.every(numero => numero > n);
}

console.log(todosMayoresQue([10, 20, 30], 45)); 
