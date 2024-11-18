"use strict";
// 1 - campos em classe
class User {
}
const savio = new User();
console.log(savio);
savio.name = "Sávio";
// savio.job ="Programer"
console.log(savio);
// 2 - Constructor
// Começa com letra maiuscula
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const erik = new NewUser("Erik", 23);
console.log(erik);
// 3 - Campo Readonly
class Carro {
    constructor(nome) {
        this.rodas = 4;
        this.nome = nome;
    }
}
const fusca = new Carro("Fusca");
console.log(fusca);
console.log(fusca.rodas);
fusca.nome = "Fusca Turbo";
console.log(fusca);
// fusca.rodas = 5
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyes", 4);
console.log(trator);
console.log(destroyer);
// 5 - Métoodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetail() {
        console.log(`Caminhão do modelo:${this.model} , que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetail();
scania.showDetail();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " Antônio Castro de " + this.surname;
    }
}
const savioSousa = new Person("Sávio", "Sousa");
console.log(savioSousa.name);
console.log(savioSousa.fullName);
//  8 - Setters
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 20;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello Worls");
console.log(myPost.itemTitle());
class TestingFace {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é ${this.title}`;
    }
}
// 10 - Override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Visibilidade Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cIntance = new C();
console.log(cIntance.x);
const dIntance = new D();
console.log(dIntance.x);
// 12 - Visibilidade Protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Este método é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - Visibilidade Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// console.log(pObj.privateMethod())
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//     myMethod(){
//         this.privateMethod()
//     }
// }
// 14 - Static Members 
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - Parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `O preço é: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.15);
console.log(newShirt.name);
// console.log(newShirt.price)
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - Class Expression
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
// 18 - Abstract class
class AbstractClass {
}
// const newObj = new AbstractClass();
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObjects = new AbstractExample("Donatelo");
newAbstractObjects.showName();
// 19 - Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
