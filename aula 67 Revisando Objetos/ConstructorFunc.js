// 
function Pessoa(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    Object.freeze(p1);  // Travar um objeto para que impeça ele de alterar;

    //retun this = this é igual a um objeto vazio
};

//{} < - this 
const p1 = new Pessoa('Bruno', 'Spinola', 23);
p1.nome = 'salsicha'
console.log(p1);