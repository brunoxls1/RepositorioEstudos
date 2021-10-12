//            -5          -4            -3          -2           -1         
//               0         1           2          3          4
const nomes = ['Bruno', 'Ronaldo', 'Romario', 'Ganucho', 'Linguiça'];
const removidos = nomes.splice(2, 3); // Separando array em outra array, metodo extremamente pratico e intuitivo
//const removidos1 = nomes.splice(2, 2,"Julia") Adiciona e separa itens a array
//const removidos = nomes.splice(2, Number.MAX_VALUE); // Utilizado para realizar até o ultimo numero
console.log(nomes,removidos);
