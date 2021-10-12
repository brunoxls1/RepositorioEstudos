const pessoas = [
    {nome: "Bruno", idade: 23},
    {nome: "Paulete", idade: 25},
    {nome: "Ricardo", idade: 80},
    {nome: "Joana", idade: 35},
    {nome: "Leticia", idade: 19},
    {nome: "Bianca", idade: 55},
    
];

const pessoaComNomeGrande = pessoas.filter(function(value){
    if(value.nome.length >= 6 ){
        return true;  
}
});
//const pessoasComNomeGrande = pessoas.filter(value => value.nome.length >= 7 );  // Uando arrow function ***********
console.log(pessoaComNomeGrande);


const pessoasVelhas = pessoas.filter(function(value){
    if(value.idade >50){
        return true;
    }
});
//const pessoasVelhas = pessoas.filter(value => value.idade >50); // Usando Arrow Function ***********
console.log(pessoasVelhas);

const pessoasComFinalA = pessoas.filter(function(value){
    return value.nome.toLowerCase().endsWith('a');
});

//const pessoasComFinalA = pessoas.filter(value=> value.nome.toLowerCase().endsWith('a')); // Usando Arrow Funciton *****************

console.log(pessoasComFinalA);

