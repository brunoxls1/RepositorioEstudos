class Pessoa {
    constructor(nome,sobrenome){
        this.nome=nome;
        this.sobrenome = sobrenome; 
    }
  

    falar(){
        return `${this.nome} esta falando`
    }
  
}

const p1 = new Pessoa('Bruno', 'Spinola');
console.log(p1)


class Produto{
    constructor(tipo,preco,material){
        this.tipo = tipo;
        this.preco = preco;
        this.material = material;
    }
}

const produto1 = new Produto('Camiseta',29.95, 'Algodão');

console.log(produto1.preco)

Math.sqrt