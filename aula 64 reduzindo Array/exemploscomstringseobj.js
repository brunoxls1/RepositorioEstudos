const pessoas = [
    {nome:'Bruno', idade : 23},
    {nome:'Jubiscreuzo', idade : 15},
    {nome:'Ronaldo', idade : 62},
    {nome:'Aldrich', idade : 70},
    {nome:'Champion Gundyr', idade : 46},
    {nome:'Denzel', idade : 28},
    {nome:'Fulana', idade : 50},
];
const pessoasMaisVelha = pessoas.reduce(function(acumulador,value){
    if(acumulador.idade > value.idade) return acumulador;
    return value;
});
console.log(pessoasMaisVelha);