function palabrasLargas(arr, n) {
    return arr.filter(palabra => palabra.length > n);
}

console.log(palabrasLargas(["manzana", "pera", "plátano", "kiwi", "holaaaaaaaa"], 5)); 
