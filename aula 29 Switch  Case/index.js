function getDayOfTheWeek(){
    let diaSemanaTexto;

        switch (diaSemana){
        case 0:
            diaSemanaTexto = "Domingo"
            break;
        case 1:
            diaSemanaTexto = "Segunda-Feira"
            break;
        case 2:
            diaSemanaTexto = "Terça-Feira"
            break;
        case 3:    
            diaSemanaTexto = "Quarta-Feira"
            break;
        case 4:
            diaSemanaTexto = "Quinta-Feira"
            break;
        case 5:
            diaSemanaTexto = "Sexta-Feira"
            break;
        case 6:
            diaSemanaTexto = "Sabado"
            break;        
        default:
        diaSemanaTexto = "Dia da semana invalido";
    }
        return diaSemanaTexto;
}

const data = new Date('2021-09-29 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDayOfTheWeek();
console.log(d)


// if (diaSemana === 0) {
//     diaSemanaTexto = "Domingo"
// } else if (diaSemana === 1) {
//     diaSemanaTexto = "Segunda-Feira"
// } else if (diaSemana === 2) {
//     diaSemanaTexto = "Terça-Feira"
// } else if (diaSemana === 3) {
//     diaSemanaTexto = "Quarta-Feira"
// } else if (diaSemana === 4) {
//     diaSemanaTexto = "Quinta-Feira"
// } else if (diaSemana === 5) {
//     diaSemanaTexto = "Sexta-Feira"
// } else if (diaSemana === 6) {
//     diaSemanaTexto = "Sabado"
// } else {
//     diaSemanaTexto = 'Dia da semana invalido'
// }
// console.log(diaSemana, diaSemanaTexto);
