// a variavel só é redefinida em suas funções vizinhas // 

const nome = ' bruno';

function falaNome(){
    
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Bruno';
    falaNome();
}
usaFalaNome();