function invertir(inver){
    let invertido=[];
    for(let i=inver.length-1; i>=0; i--){
        invertido.push(inver[i]);
    }
    return invertido;
}
let num=[1,2,3,4,5,6,7,8,9,,10];
let invertido=invertir(num);
console.log("invertir: "+invertido);