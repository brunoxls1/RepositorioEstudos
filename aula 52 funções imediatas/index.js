// IIIFE - > Immediately invoked function expression
// Função imediata não toca o escopo global 
(function(idade, peso, altura){
    
    const sobrenome = 'Spinola';
    function falaOi(nome){
        return nome + ' ' + sobrenome;

    }
    function falaNome(){
        console.log(falaOi("Bruno"));
    }
    falaNome();
    console.log(idade, peso , altura)
})(30, 62, 1.67);

const nome = "xabuya";