function aleatorio(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject("Cai no erro");
                return;
            }
        })
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo)
    });
}

/*esperaAi('Fase 1', aleatorio())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', aleatorio())
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3',aleatorio)

    })
    .then(fase => {
        console.log(fase);
    })
    .catch(e => console(e));*/

async function exec() {
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3)
        console.log('terminamos na fase', fase3)
    } catch (e) {
        console.log(e)
    }
}
exec();

/*
3 estados de uma promise
pendente -
fullfilled -
rejected- 
*/