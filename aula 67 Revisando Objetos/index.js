// Pode ser usar chave "[]" para selecionar uma chave no objeto; exemplo abaixo;
// Marcação de . = exemplo pessoa.nome // é muito mais util e facil de entender, porem algumas situaçãos a chave é mais precisa

const pessoa = {
    nome:'Bruno',
    sobrenome: 'Spínola'
};
const chave = 'nome';
console.log(pessoa[chave]);