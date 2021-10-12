// Factory Function
// this --> this representa o p1 nesse exemplos;
// this vai ser sempre a  "pessoa" que chamar o objeto ; 

function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        fala: function(assunto){
            return `${nome} está falando sobre ${assunto}.`
        },
        altura:a,
        peso:p,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Bruno', 'Spinola', 1.67, 62);
console.log(p1.fala('javascript'))
console.log(p1.imc());
