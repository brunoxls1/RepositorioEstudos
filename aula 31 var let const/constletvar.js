const verdadeira = true ;

//Let tem escopo de bloco, só pode ser redeclarado dentro de um bloco (){}[];
//Var só tem escopo de função

let nome = "Bruno"; //Criando
var nome2 = "Oliveira";

if(verdadeira){
    let nome2 ="Spínola" // Apesar do mesmo nome, essa é outra variavel, pois esta dentro de um bloco;
    var nome = "Elvis"
    console.log(nome, nome2);
}