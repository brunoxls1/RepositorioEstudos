// ... rest, ...spread //
const numeros = [1,2,3,4,5,6,7,8,9];
const [primeiroNum, ,terceiroNum, ...resto] = numeros;
console.log(primeiroNum,terceiroNum,resto);