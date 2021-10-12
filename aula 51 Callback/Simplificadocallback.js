// Mesmo codigo que o anterior, porem, sem a "arvore de callbacks", para deixar o codigo mais limpo.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());

}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
f1(f1callBack);
function f1callBack() {
    f2(f2callBack);
}
function f2callBack() {
    f3(f3callBack);
}
function f3callBack() {
    console.log('olá mundo!');
}
