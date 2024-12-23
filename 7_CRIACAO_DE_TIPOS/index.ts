// 1 -  Generics
function showData<T>(arg: T):string{
    return `O dados é: ${arg} `
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData([ ]))
console.log(showData([1,2,3]))

// 2 - Constraint em Generics
function showProductName<T extends { name: string }>(obj: T): string {
    return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
// const thirdObj = { price: 19.99, category: "Roupa" }; // Este objeto não tem a propriedade 'name', logo causaria um erro.

console.log(showProductName(myObj)); // Saída: O nome do produto é: Porta
console.log(showProductName(otherProduct)); // Saída: O nome do produto é: Carro


// 3 - Interfaces com Generics
interface MyObject<T,U,Q>{
    name: string
    wheels: T
    engine: U
    color : Q
}

type Car = MyObject<number, number ,string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "Fusca", wheels:4, engine: 1.0, color:"Branco"}
const myPen: Pen = {name: "Caneta BIC", wheels: false, engine: false,color:"Azul"}

console.log(myCar)
console.log(myPen)

// 4 - Type Parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: '2TB',
    ram: '32GB',
};

console.log(getSomeKey(server, 'ram'));  // Saída: "A chave ram está presente no objeto e tem o valor de 32GB"
// console.log(getSomeKey(server, 'teste'))

// 5 - Keyof type Operator
type Character = {name: string, age:number, hasDriveLicense : boolean}

type C = keyof Character

function showCharName(obj : Character, name : C){
    return `${obj[name]}`
}

const myChar: Character = {
    name :"Sávio",
    age: 22,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
console.log(showCharName(myChar, 'hasDriveLicense'))
// showCharName("teste", "asd")

// 6 - Typeof Type Operator
const userName : string = "Sávio"

const userName2 : typeof userName = "João"

// const userName3 : typeof userName = 14

type x = typeof userName

const userName4: x = "Joaquim"

// 7 - Index Access types
type Truck = {km : number, kg : number, description:string}

type km = Truck ['km']

const newTruck : Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: km){
    console.log(`O veículo tem a km de ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg : 1000,
}

showKm(newCar.km)

// 8 - Conditional types
interface A {}

interface B extends A {}
interface Teste {
    showName():string

}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2:myType ="teste"
console.log(typeof(someVar))

type myTypeB = Teste extends {showName ():string} ? string : boolean

// 9 - Template Literals Type
type testeA = "teste"

type CustomType = `some ${testeA}`

const testing: CustomType = "some teste"
// const testing2: CustomType = "some text 2"

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`