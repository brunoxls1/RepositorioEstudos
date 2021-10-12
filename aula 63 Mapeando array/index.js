const numero = [5, 10, 80, 1, 2, 3, 5, 8, 7, 15, 19, 50, 64];
const numerosEmDobro = numero.map(function (value) {
    return value * 2
});
console.log(numerosEmDobro);



const pessoas = [
    {nome:'Bruno', idade : 23},
    {nome:'Jubiscreuzo', idade : 15},
    {nome:'Ronaldo', idade : 62},
    {nome:'Aldrich', idade : 70},
    {nome:'Champion Gundyr', idade : 46},
    {nome:'Denzel', idade : 28},
    {nome:'Fulana', idade : 50},
];

const pessoasString = pessoas.map(function(obj){
    return obj.nome.toString();
})
console.log(pessoasString);

const pessoasChave = pessoas.map(function(obj){ // criando um novo objeto usando os valores do objeto idade.
    return {idade: obj.idade};
});
console.log(pessoasChave)


const addId = pessoas.map(function(obj, indice){ // Adicionando chave ID para o objeto
    const newObj = {...obj};
    newObj.id = indice +1  ; 
    return newObj;
});
console.log(addId);