/*
Avaliação de Curto Circuito

&& -> false && true = false "o valor mesmo";
|| -> true && false -> Precisa de apenas uma expressão verdadeira para retornar o valor VERDADEIRO

FALSY ;
false
0
"" '' ``
null / undefined
NaN
*/

//function falaOi(){
//    return 'oi';
//}

//const vaiExecutar = true ;

//console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Pelo fato da corUsuario estar NULL, utilizando o || "or", podemos atingir o true que seria "Preta" neste caso.
                                        // caso o input do corUsario altere para true, o valor de saida seria o input e não a cor padrão = preta;
console.log(corPadrao);


