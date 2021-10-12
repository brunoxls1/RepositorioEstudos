// defineProperty = Uma propriedade
// defineProperties = Mais de uma 

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable:true,                 //Mostra Chave
        configurable: true,            // Para reconfigurar a chave, caso necessario.
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !=='number'){
               throw new TypeError('Ops...')
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);  
p1.estoque = 'Pila';
console.log(p1.estoque);                 