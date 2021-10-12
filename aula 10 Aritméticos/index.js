/* Aritméticos 
   + = Adição / Concatenação (Junção de dois valores)
   - = Subtração 
   / = Divisão
   % = Resto da divisão
   * = Multiplicação
   ** = Potenciação 
   ++ = Sempre acrescenta 1 a sua variavel
   -- = Sempre diminui 1 da sua variavel
   Precedência = Utilizar os parentesis para definir qual conta o script deve realizar primeiro
   NaN = Not a Number 
   parseInt Transforma uma string em uma numero Inteiro, exemplo : const num1 = parseInt('15') - parseFloat Transforma a String em um numero decimal, exemplo const num1 = parseFloat('15')
*/ 
// exemplos abaixo 
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2 * num3); // Sem precedência
console.log((num1 + num2)*num3); // Precedência