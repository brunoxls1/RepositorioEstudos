//Create Elemente = Para criar elementos dentro do HTML
// appendChild = para atrelar um elemento dentro de outro.

const elementos = [
    {tag:'p', texto: 'Frase 1 '},
    {tag:'div', texto: 'Frase 2 '},
    {tag:'footer', texto: 'Frase 3'},
    {tag:'section', texto: 'Frase 4 '},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i<elementos.length; i++){
    let {tag,texto} = elementos[i];
    let temp = document.createElement(tag);
    let textoNode = document.createTextNode(texto);
    temp.appendChild(textoNode);
    div.appendChild(temp);
}
container.appendChild(div);