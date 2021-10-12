// unindo tudo em um só ;

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];
const numerosPares = numeros.filter(function(value){
    return value % 2 ===0;
  
}).map(function(value){
    return value * 2;
}).reduce(function(acumulador,value){
    return acumulador += value ;
})

console.log(numerosPares);