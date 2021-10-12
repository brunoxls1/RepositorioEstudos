// defineProperty = Uma propriedade
// defineProperties = Mais de uma 

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque', {
        enumerable:true,                 //Mostra Chave
        value:estoque,                  // Valor da chave
        writable: false,               // Para poder alterar ou não o valor;
        configurable: true            // Para reconfigurar a chave, caso necessario.
    });
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1));                   // Object.keys(p1) para fazer uma array com os resultados