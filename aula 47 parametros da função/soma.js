//Maneira antiga
function funcao(a,b){
    b = b || 2;
    console.log(a + b);
 }
 funcao(2);

 // Maneira moderna 
 function funcao1(c,d=2,e=4){
   
    console.log(c + d + e) ;
 }
 funcao1(2, undefined, 20); // Usar undefined para que o parametro assuma o valor padrão/