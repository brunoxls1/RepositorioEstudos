// (condição) ? 'Valor para true' : 'Valor para false ; 


const pontuacaoUsuario = 1000; 
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuario VIP' : 'Usuario padrão';  /// Ambos os codigos tem a mesma funcionalidade, porém, utilizando ? :, 
                                                                                //você consegue gravar direto o resultado na variavel e usa-la em qualquer lugar do seu projeto;
console.log(nivelUsuario);
//if (pontuacaoUsuario >=1000){ 
//    console.log('Usuario VIP')
//}else { 
//    console.log('Usuario padrão');
//}