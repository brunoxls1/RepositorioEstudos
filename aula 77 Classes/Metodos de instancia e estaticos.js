class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //Método de instancia
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estatico
    static trocaPilha(){
        console.log('Necessita trocar a pilha')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume()
controle1.aumentarVolume()

ControleRemoto.trocaPilha();
console.log(controle1)

