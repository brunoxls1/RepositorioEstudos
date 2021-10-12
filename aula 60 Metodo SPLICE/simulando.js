


// nomes.splice(ídice atual, delete, elem1,elem2,elem3);


const nomes = ['Bruno', 'Ronaldo', 'Romario', 'Ganucho', 'Linguiça'];
//Push
nomes.splice(nomes.length,0, 'Papa');
console.log(nomes);

//Unshift 
nomes.splice(0,0, 'Salsicha','Banana');
console.log(nomes);

//pop
const pop = nomes.splice (-1,1);

//shift
const shift = nomes.splice(0,1);