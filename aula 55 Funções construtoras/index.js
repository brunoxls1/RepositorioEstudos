// Função construtora  - > retorna objetos
// Construtora sempre inicia com letra maiuscula - > Pessoa(new);
// Para usar a função construtora é OBRIGATORIO colocar a palavra new antes.
function Pessoa(nome, sobrenome){
    // Atributos privados ou metodos  - > não ficam disponiveis fora do corpo do objeto/função 
    const ID = 123456;

    const metodoInterno = function(){

    };

        //Atributos ou Metodos publicos -> ficam disponiveis fora da função usando anotação de ponto
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Bruno', 'Spínola');
const p2 = new Pessoa('Ronaldo', 'Fenomeno');

console.log(p1.nome)
console.log(p2.nome)
p1.metodo();