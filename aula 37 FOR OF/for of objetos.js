// For classico - Geralmente com iteraveis (array ou strings)
// For in - retorna o indice ou chave (string, array ou objetos)
// For of - retorna o valor em si (iteraveis, arrays ou strings)


const pessoa = {
    nome:'Bruno',
    sobrenome:'Spínola'
};

for(let key in pessoa){
    console.log(key, pessoa[key]);
}