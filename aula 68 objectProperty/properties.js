// defineProperty = Uma propriedade
// defineProperties = Mais de uma 

function Produto(nome,preco,estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable:true,                 //Mostra Chave
        value:estoque,                  // Valor da chave
        writable: false,               // Para poder alterar ou não o valor;
        configurable: true            // Para reconfigurar a chave, caso necessario.
    });

    Object.defineProperties(this,{
        nome: {
            enumerable:true,                 
            value:nome,                  
            writable:  true,               
            configurable: true  
        },
        preco: {
            enumerable:true,                 
            value:preco,                
            configurable: true  
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)                  