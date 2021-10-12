/// Colchetes [] = ARRAY
// Chaves {} = Objeto

/*const pessoa1 = { <---------- Forma de criar um Objeto;
    nome: 'Bruno',
    sobrenome: 'Spínola',
    idade: 23
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);*/

//------------------------------------------------------------------------

//Criando uma função que cria objetos.
/*function criaPessoa (nome, sobrenome, idade){  <----------------------- Parametro
    return{nome, sobrenome, idade }; 
}

const pessoa1 = criaPessoa("Bruno", "Spínola", 23); <------------------ Argumento.
const pessoa2 = criaPessoa("Leticia", "Bruscato", 20);
const pessoa3 = criaPessoa("Sueli", "Correa", 50);
const pessoa4 = criaPessoa("Ale", "Correa", 60);
console.log(pessoa1.nome, pessoa1.idade);*/


/*const pessoa1 = {    <----------------------- Outra forma de criar um Objeto com função.
    nome:"Bruno",
    sobrenome:"Spínola",
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    incrementaIdade(){
        this.idade++; <------------------------- acrescenta idade + 1, toda vez que for repetido.
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();*/