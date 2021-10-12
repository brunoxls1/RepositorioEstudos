// Declaração de Função (Function hoisting) - Independente de onde você "chamar" a função, a engine do JS vai ativa-la
falaOi();
function falaOi(){
    console.log('oie'); 
}

// First-class objects (Objetos de Primeira Classe) - 
// Function expression 
const souUmDado = function(){
    console.log('Sou um dado.');
};

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
};
executaFuncao(souUmDado);

//Arrow function

const arrowFunction = () =>{
    console.log('Sou uma arrow function');
};
arrowFunction();

//Dentro de um objeto podemos ter uma função
const obj = {
    falar:function(){
        console.log('Falando...')
    }
};
obj.falar();

//Maneira mais simplificada

const obj1 = {
    falar1(){
        console.log('Falando novamente...')
    }
};
obj1.falar1();