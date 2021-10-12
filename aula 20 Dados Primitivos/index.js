//Dados primitivos (imutáveis) - string, number, boolean, undefined, null (bigint,symbol)
// *** PRIMITIVOS SÃO VALORES COPIADOS ****

/*let a = "A";
let b = a ; // Cópia
console.log(a, b);       // O valor de b é uma cópia do primeiro valor de a, ou seja, não muda caso o valor de a for alterado futuramente, continuara sendo uma copia do primeiro valor de a //


a = "outra coisa";     
console.log(a, b);*/

// Referencia (mutável) - array, object, function 
// ***  Referencia SÃO VALORES PASSADOS POR REFERENCIA ***

/* let a = [1,2,3];
let b = a ;
console.log(a, b);       // Os valores de a e b apontam para o mesmo lugar na memória
                            ou seja, se o valor de a for alterado, o de b também será, consequentemente.
a.push(4);
console.log(a, b);       // adicionou um elemento na variavel a, consequentemente alterou a variavel b.

b.pop();
console.log(a, b);*/     // retirou um elemento da variavel a, consequentemente alterou a variavel b.

/*const a = {
    nome:'bruno',
    sobrenome:'spínola'
};
const b = {...a}; <--------- Utilizar o "..." (spread), para que as variaveis NÃO APONTEM para o mesmo local da memoria.
a.nome = 'SIDOKA'
console.log(a);
console.log(b);*/             