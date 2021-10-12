const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];
const numerosPares = numeros.filter(function(value){
    if(value % 2 === 0) return value;
});
console.log(numerosPares)

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];
const dobrarValue = numeros.map(function(value){
    return value * 2
});
console.log(dobrarValue)


const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];
const somarTudo = numeros.reduce(function(acumulador, value){
    acumulador += value;
    return acumulador ;
});
console.log(somarTudo)

