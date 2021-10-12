// Retornando um array com os pares 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];
const total = numeros.reduce(function(acumulador,value){   // Reduce recebe antes de Value, o parametro Acumulador, ou seja, em ordem : (acumulador,value,index, array);
    if(value % 2 === 0 ) acumulador.push(value);
    return acumulador;
},[]);
console.log(total);