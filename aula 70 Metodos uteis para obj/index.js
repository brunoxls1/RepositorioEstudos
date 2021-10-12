//Object.value
//Object.entries
// Object.assign(des, any)
// object.getOwnPropertyDescriptor(o,'prop')
// ...(spread) 

// Já vimos
/*Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty (define uma propriedade)*/

const produto = {nome: 'caneca', preco:1.8};
const caneca = Object.assign({}, produto); // Copia um Objeto // Pega um objeto de destino e joga nele varios outros objetos.
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable:false
});
console.log(Object.getOwnPropertyDescriptor(produto,'nome')); // retorna os booleans de defineProperty
console.log(Object.values(produto)); // retorna valores do objeto
console.log(Object.keys(produto)); // retorna as chaves do objeto

for (let valor of Object.entries(produto)){ // Retorna chave e valor em arrays
    console.log(valor[0], valor[1])
}

