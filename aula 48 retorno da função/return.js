function falaFrase(comeco){
    function falaResto(resto){
        return comeco +' '+ resto; // Esse retorno é da função falaResto
    }
    return falaResto;  // Esse retorno é da funcão falaFrase
}

const fala = falaFrase('olá');
const resto = fala('mundo!');
console.log(resto);