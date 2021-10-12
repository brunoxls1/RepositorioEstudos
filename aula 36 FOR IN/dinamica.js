// Acessando o objeto de forma dinamica ; 

const pessoas = {
    nome : 'Bruno',
    sobrenome : 'Spínola',
    idade : 23
};

for (let chave in pessoas){
console.log(chave, pessoas[chave]);
}
