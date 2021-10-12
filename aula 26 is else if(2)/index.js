
// Pode-se criar mais de 1 IF para checar informações diferentes sobre a expressão, exemplos abaixo;

const numero = 7;
if(numero === 7){
    console.log('Numero é igual a 7')
}

if (numero >=0 && numero <=5){
    console.log('O numero esta entre 0 e 5');
    
}else if(numero >=6 && numero <= 8){
    console.log('o numero esta entre 6 e 8');
}
else{
    console.log(false);
} 