// Factory Functions / Constructo functions  // Classes

function criaPessoa(nome,sobrenome,idade){
    return {
        nome,
        sobrenome,
        idade,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome} ${this.idade}`
        }
    };
}
const p1 = criaPessoa('Bruno', 'Spínola',23);
console.log(p1.nomeCompleto());
