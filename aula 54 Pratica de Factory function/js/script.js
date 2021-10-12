function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.clickEnter();
        },
        clickEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.doCount();
                }
            });
        },

        doCount(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }  catch(e){
                alert('Conta inválida');
                return;
            }
        },
        
        clearDisplay(){
            this.display.value='';
        },
        
        delOne(){
            this.display.value = this.display.value.slice(0,-1);
        },
        
       
        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', (e)=>{   //Arrow Function, sem necessidade de usar "bind(this)"
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.delOne();
                }

                if(el.classList.contains('btn-eq')){
                    this.doCount();
                }
        

            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;

        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();