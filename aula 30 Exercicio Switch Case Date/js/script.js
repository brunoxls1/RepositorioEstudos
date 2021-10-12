const h1 = document.querySelector('.container h1');
const data = new Date('2019-10-07 22:52');
const opcoes = {
    dateStyle:'full',
    timeStyle:'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes)

