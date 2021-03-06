// new Object -> Object.prototype
const objA = {
chaveA: 'A'
// __proto__: Object.prototype
// objA.__proto__ === Object.prototype
};

// new Object -> Object.prototype
const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
    // objB.__proto__ === Object.prototype
    };

    const objC = new Object();
    objC.chaveC = 'C';

    Object.setPrototypeOf(objB, objA);
    Object.setPrototypeOf(objC, objB);
    console.log(objC.chaveA);