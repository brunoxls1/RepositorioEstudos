// Acessando cada indice da STRING

const nome = ['Bruno', 'Oliveira', 'Spínola']

for (let i = 0; i<nome.length; i++){
    console.log(nome[i])
}

// Mesma coisa, utilizando o FOR IN ; 

for (let i in nome){
    console.log(nome[i])
}


for (let valor of nome){
    console.log(valor)
}

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});