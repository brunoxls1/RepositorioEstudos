/* Bruno Spínola tem 23 anos, pesa 62 kg tem 1.67 de altura e seu IMC é de 22.
Bruno nasceu em 1998 */

const nome = 'Bruno ';
const sobrenome = 'Spínola';
const idade = 23 ; 
const peso = 62 ; 
const alturaemM = 1.67; 
let imc= peso / (alturaemM * alturaemM); 
let anoNascimento; 
anoNascimento = 2021 - idade;


// template strings
console.log(`${nome}${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaemM} e seu IMC é de ${imc}`)
console.log(`${nome}nasceu em ${anoNascimento}`);