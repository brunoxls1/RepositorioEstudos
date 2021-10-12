// Desestruturação de OBJECT //

function funcao({nome, sobrenome, idade}){
        console.log(nome, sobrenome, idade);
  
 }
 let objeto = {nome: 'Bruno', sobrenome:'Spinola', idade: 23};
 funcao(objeto);

//####################################################################

 // Desestruturação de ARRAYS 
 function funcao1([valor1, valor2, valor3 ]){
    console.log(valor1, valor2, valor3);

}
let objeto1 = ['Bruno','Spinola',23];
funcao1(objeto1);

//###################################################################
// rest operator = ...

const conta = function(operador,acumulador, ...numeros){
    for(let numero of numeros){
      if(operador ==='+')  acumulador += numero;
      if(operador ==='-')  acumulador -= numero;
      if(operador ==='*')  acumulador *= numero;
      if(operador ==='/')  acumulador /= numero;
    }
    console.log(acumulador)
}
conta('*', 1, 20,30,40,50);