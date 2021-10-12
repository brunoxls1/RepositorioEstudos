const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Spínola',
    idade: 23,
    endereço:{ 
        rua:'Perdizes',
        numero: 375
    }
};

// Atribuição via desestruturação de objeto
const {nome, sobrenome,idade,endereço} = pessoa;
console.log(nome,endereço);