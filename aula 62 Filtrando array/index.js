// Filter -> vai sempre retornar um array, com a mesma quantidade de elementos ou menos.

//FILTER
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22,27];



const numerosFiltrados = numeros.filter(function(valor, indice, array){
    return valor > 10;
});

console.log(numerosFiltrados);

//const numerosFiltrados = numeros.filter (valor => valor > 10); // Maneira simplificada e moderna
//console.log(numerosFiltrados);

