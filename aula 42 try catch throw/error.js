// Metodo para lançar ERROS no front END -- Nunca utilizar o termo ERROR para lançar um erro, utilizar termos mais amigaveis ao usario.

function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros');
    }
    return x +y;
}
try{
console.log( soma(1,2));
console.log( soma('1',2));
} catch(error){
//console.log(error);
console.log('Ops... algo esta errado')
}