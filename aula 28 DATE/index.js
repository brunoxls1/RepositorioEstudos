// Date é um função construtora 
const data = new Date(1632618097060);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+ 1); // o Mês começa em 0 (Janeiro) e termina em 11 (Dezembro), se acrescentar +1 na variavel o resultado será como no mundo real;
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());// 0 = Domingo, 6 = Sabado
console.log(data.toString());
console.log(Date.now()); // Resultado de DATE NOW é a data do momento em que o resultado é inputado // 
