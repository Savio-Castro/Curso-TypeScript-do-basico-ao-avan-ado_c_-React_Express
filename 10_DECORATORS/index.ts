// 1 - Exemplo decorator
function myDecorator(){
    console.log("Iniciando decorator!");

    return function(target:any, properKey:string, descriptor:PropertyDescriptor){

        console.log("Exexutando decorator");
        console.log(target);
        console.log(properKey);
        console.log(descriptor);

    }
}

class myClass {
    name!: string

    @myDecorator()
    testing(){
        console.log("terminando execução do método");
    }
}

const myObj = new myClass()

myObj.testing();

// 2 - Múltiplos decorators
function a () {
    return function(
        target:any, 
        properKey:string, 
        descriptor:PropertyDescriptor
    ){
        console.log("Executou a.")
    }
}

function b () {
    return function(
        target:any, 
        properKey:string, 
        descriptor:PropertyDescriptor
    ){
        console.log("Executou b.")
    }
}

function c () {
    return function(
        target:any, 
        properKey:string, 
        descriptor:PropertyDescriptor
    ){
        console.log("Executou c.")
    }
}

class MultipleDecorators{
    @c()
    @a()
    @b()
    testing(){
        console.log("Terminando execução")
    }
}

const multiple = new MultipleDecorators()

multiple.testing();

// 3 - Decorator de classe
function classDecorator(constructor: Function){
    console.log(constructor)
    if(constructor.name === "User"){
        console.log("Criando Usuário!")
    }
}
@classDecorator
class User {
    name

    constructor(name: string){
        this.name = name
    }
}

const savio = new User ("Sávio")

console.log(savio);

// 4 - Decorator de método
function enumerable(value: boolean){
    return function(
        target:any, 
        properKey:string, 
        descriptor:PropertyDescriptor
    ){
        descriptor.enumerable = value;
    }
}

class Machine {
    name

    constructor(name: string){
        this.name = name
    }
    @enumerable(true)
    showName(){
      console.log(this);
      return `O nome da máquina é: ${this.name}`  
    }
}

const trator = new Machine ("Trator");

console.log(trator.showName());

// 5 - Accessor decorator
class Monster {
    name?
    age?

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
    @enumerable(true)
    get showName (){
        return `Nome do monstro: ${this.name}`
    }

    @enumerable(true)
    get showAge (){
        return `Idade do monstro: ${this.age}`
    }
}

const lobisomem = new Monster ("Lobisomem", 22)

console.log(lobisomem)

// 6 - Property decorator
// 1 - 00001
function formatNumber(){
    return function(target: Object, propertyKey : string){

        let value: string

        const getter = function (){
            return value
        }

        const setter = function(newVal:string){
            value = newVal.padStart(5,"0")
        }

        Object.defineProperty(target, propertyKey,{
            set: setter,
            get: getter,
        })
    }
}

class ID{
    @formatNumber()
    id;

    constructor(id:string){
        this.id = id
    }
}

const newItem = new ID("1");

console.log(newItem);
console.log(newItem.id);

// 7 - Exemplo real : Class Decorator
function createDate(create: Function){
    createDate.prototype.createdAt = new Date
}
@createDate
class Book{
    id
    createdAt?: Date
    constructor(id: number){
        this.id = id
    }
}
@createDate
class Pen{
    id

    constructor(id: number){
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(55)

console.log(newBook)
console.log(pen)

console.log(newBook.createdAt)

// 8 - Exemplo real: Method Decorator
// Method Decorator
function checkIfUserPosted() {
    return function(
        target: object,
        key: string | Symbol, 
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (args[1] === true) {
                console.log("Usuário já postou");
                return null;  
            } else {
                return childFunction.apply(this, args); 
            }
        };

        return descriptor;  
    };
}

class Post {
    alreadyPosted = false;

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);

newPost.post("Meu segundo post!", newPost.alreadyPosted);

// 9 - Exemplo real: Property Decorator
function Max(limit:number){
   
    return function(target:object, properKey:string){

    let value : string

    const getter = function(){
        return value
    }

    const setter = function(newVal : string){
        if(newVal.length > limit){
           console.log(`O valor deve ter no máximo ${limit} digitos.`) 
           return
        } else {
            value = newVal
        }
    }
    Object.defineProperty(target, properKey, {
        get: getter,
        set: setter,
    });
    
    }
}

class Admin {
    @Max(10)
    username

    constructor(username:string){
        this.username = username
    }
}

let pedro = new Admin("pedroadmin12345")
let lee = new Admin("lee")

console.log(lee) 