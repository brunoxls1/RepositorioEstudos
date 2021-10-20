class Dispositivo {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + 'já ligado');
            return;
        }
        this.ligado = true;
 }
 desligar(){
    if(!this.ligado){
        console.log(this.nome + 'já desligado')
        return;
    }
    this.ligado = false ;
}
}

class Smartphone extends Dispositivo {
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends Dispositivo{
    constructor(nome, modelo){
        super(nome);
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Iphone','Preto','IOS10');
const tb1 = new Tablet('iPad', 'Prata')
console.log(s1)
console.log(tb1)