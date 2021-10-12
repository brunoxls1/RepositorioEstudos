//Escopo Global//
//Closure é a habilidade que a função tem em acessar o escopo Lexico//

function retornaFuncao(nome){
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Bruno');
const funcao2 = retornaFuncao('Spinola');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());