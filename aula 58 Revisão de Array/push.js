const nomes = ['Bruno', 'Julio', 'Ronaldo'];
nomes.unshift('Romario'); // Adiciona no começo no array
nomes.push('Neymar'); // adiciona no final da array
const novo = nomes.slice(1,3); // Fatiar array 
console.log(nomes);
console.log(novo);