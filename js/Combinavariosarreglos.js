const combinarYOrdenar = (...arrs) => [].concat(...arrs).sort((a, b) => a - b);

const arr1 = [5, 3];
const arr2 = [8, 1];
const arr3 = [7, 2];
console.log(combinarYOrdenar(arr1, arr2, arr3));
