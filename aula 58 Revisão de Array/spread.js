// Copiando a Array sem alterar a array principal;
// Maneira de copiar uma array em uma variavel;
// usando SPREAD = ...

const nomes = ['Bruno', 'Julio', 'Ronaldo'];
const novo = [...nomes];
const removeUltimo = nomes.pop(); // Pop remove o ultimo elemento do array / Salvando o elemento removido em uma variavel;
const removePrimeiro = nomes.shift(); // Shift remove o primeiro elemento do array // Salvando variavel da array;

console.log(nomes);
console.log(novo);
console.log(removido);