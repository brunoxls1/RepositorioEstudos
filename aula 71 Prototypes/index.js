// Construtora -> molde (classe)
// _proto_ = Pessoa.prototype
function Pessoa(nome,sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome;
   // this.nomeCompleto=()=>'ORIGINAL' + this.nome + ' ' + this.sobrenome;
};
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' '  + this.sobrenome;
}

const p1 = new Pessoa('bruno', 'pingola');
const data = new Date();
console.log(p1,data);
