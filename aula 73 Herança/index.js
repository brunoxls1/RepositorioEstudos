// Produto -> aumento, desconto
// Camiseta , Caneca , Boné = São Produtos

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};

// Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        },
    });
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Bone(nome, preco, modelo) {
    Produto.call(this, nome, preco);
    this.modelo = modelo;
};
Bone.prototype = Object.create(Produto.prototype);
Bone.prototype.constructor = Bone;

Bone.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca do Mickey', 15, 'Porcelana');
const bone = new Bone('Bone', 12, 'Aba reta');
camiseta.aumento(100);
caneca.aumento(100);
bone.aumento(100);
caneca.estoque = 100  //setter
console.log(caneca.estoque); // getter 
console.log(caneca);
console.log(camiseta);
console.log(bone);
