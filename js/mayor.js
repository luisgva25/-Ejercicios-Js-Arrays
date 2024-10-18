function mayornumero(n1,n2){
    let numero1=n1;
    let numero2=n2;
    if (n1>n2){
        return numero1;
    }else{
        return numero2;
    }
}
console.log("el numero mayor es: "+mayornumero(9,55));