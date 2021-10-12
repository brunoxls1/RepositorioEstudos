

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //getter
       get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor){
            valor = valor.split (' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        
        fala: function (assunto='sobre NADA') {
            return `${nome} está falando sobre ${assunto}.`
        },
        altura: a,
        peso: p,
        // Getter - Obtem o valor da função
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Bruno', 'Spinola', 1.67, 62);
const p2 = criaPessoa('Luiz', 'Inacio', 1.65, 70);
const p3 = criaPessoa('Paulo', 'Muzy', 1.80, 110);

console.log(p3.imc);
console.log(p2.imc);
console.log(p1.imc);