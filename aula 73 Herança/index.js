// Produto -> aumento, desconto
// Camiseta = Cor, Caneca = material, lapis = São Produtos

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};

// Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};


function Caneca(nome,preco,material){
    Produto.call(this,nome,preco);
    this.material = material;
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca do Mickey', 15,'Porcelana')
camiseta.aumento(100);
console.log(camiseta);
console.log(caneca);
