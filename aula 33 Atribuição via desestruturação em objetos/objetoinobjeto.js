const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Spínola',
    idade: 23,
    endereço:{ 
        rua:'Rua Perdizes',
        numero: 375
    }
};

// Atribuição via desestruturação de objeto
const {nome, sobrenome,idade,endereço:{rua,numero}} = pessoa;
console.log(nome,rua);