// New Object ; 


const pessoa1 = new Object();
pessoa1.nome = "bruno";
pessoa1.sobrenome= "spinola";
pessoa1.idade = 23
pessoa1.falaNome = function(){
   return (`${this.nome} está falando...`)
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear()- this.idade;
};
for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}