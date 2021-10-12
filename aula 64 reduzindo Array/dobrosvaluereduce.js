const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];
const total = numeros.reduce(function(acumulador,value){   // Reduce recebe antes de Value, o parametro Acumulador, ou seja, em ordem : (acumulador,value,index, array);
    acumulador.push(value * 2);
    return acumulador; 
    
},[]);
console.log(total)