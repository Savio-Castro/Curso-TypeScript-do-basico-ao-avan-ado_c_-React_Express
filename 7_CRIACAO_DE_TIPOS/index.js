"use strict";
// 1 -  Generics
function showData(arg) {
    return `O dados é: ${arg} `;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData([]));
console.log(showData([1, 2, 3]));
// 2 - Constraint em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
// const thirdObj = { price: 19.99, category: "Roupa" }; // Este objeto não tem a propriedade 'name', logo causaria um erro.
console.log(showProductName(myObj)); // Saída: O nome do produto é: Porta
console.log(showProductName(otherProduct)); // Saída: O nome do produto é: Carro
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - Type Parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram')); // Saída: "A chave ram está presente no objeto e tem o valor de 32GB"
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Sávio",
    age: 22,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// showCharName("teste", "asd")
// 6 - Typeof Type Operator
const userName = "Sávio";
const userName2 = "João";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
// const someVar2:myType ="teste"
console.log(typeof (someVar));
const testing = "some teste";
