// Simplificado;
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];
const numerosPares = numeros
.filter(value => value % 2 ===0)
.map(value =>value * 2)
.reduce((acumulador,value)=>acumulador += value)
    
console.log(numerosPares);