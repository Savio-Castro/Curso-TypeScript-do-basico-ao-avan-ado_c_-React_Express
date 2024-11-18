"use strict";
function showProductDetail(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
    else {
        console.log("Acabou o produto!");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetail(shirt);
showProductDetail({ name: "Tenis", price: 130.50, isAvailable: false });
function showUserDetail(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "savio@gmail.com", role: "Admin" };
const u2 = { email: "gabriel@gmail.com" };
showUserDetail(u1);
showUserDetail(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
coords.z = -7;
console.log(coords);
const savio = {
    name: "Savio",
    age: 22
};
console.log(savio);
const luffy = {
    name: "Monkey D. Luffy",
    age: 16,
    superPower: ["Gomu Gomu no Mi", "Gear Second", "Gear Fourth"]
};
console.log(luffy);
console.log(luffy.superPower[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7- ReadOnlyArray
let myArray = ["Maçã", "Laranja", "Banana", "Goiaba"];
//  myArray[4] = "Mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ["Sávio", 22];
console.log(anotherUser);
console.log(anotherUser[0]);
anotherUser[0] = "Gabriel";
// anotherUser[1] = "Gabriel"
console.log(anotherUser);
// 9 - Tuplas com Readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
}
showNumbers([1, 2, 3]);
