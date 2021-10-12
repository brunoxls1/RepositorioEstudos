// Return, retorna um valor e termina função

function soma(a,b){
    return a+b;
}



function criaPessoa (nome, sobrenome){
    //return {nome: nome, sobrenome: sobrenome};
    return {nome, sobrenome};
}

const p1 = criaPessoa ('Bruno', 'Spinola'); //retornam a mesma coisa
const p2 = {
    nome:'Bruno',
    sobrenome:'Spinola'
};

console.log(p1); // ambas variaveis são OBJETOS
console.log(p2);
