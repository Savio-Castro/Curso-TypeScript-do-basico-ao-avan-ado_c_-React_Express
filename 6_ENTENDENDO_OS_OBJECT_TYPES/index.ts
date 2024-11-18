// 1- Tipo de objeto para função com interface
// nome da interface com letra maiuscula
interface Product{
    name:string
    price:number
    isAvailable :boolean

}

function showProductDetail(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)

    if(product.isAvailable){
        console.log("O produto está disponivel")
    } else {
        console.log("Acabou o produto!")
    }
}

const shirt:Product = {
    name:"Camisa",
    price: 19.99,
    isAvailable:true
}

showProductDetail(shirt)
showProductDetail({name: "Tenis",  price: 130.50, isAvailable: false})

// 2- Propriedades opcionais em interfaces
interface User {
    email: string,
    role?: string
}

function showUserDetail(user: User){
    console.log(`O usuário tem o e-mail: ${user.email}`)
    if(user.role){
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {email:"savio@gmail.com", role:"Admin"}
const u2:User = {email:"gabriel@gmail.com"}

showUserDetail(u1)
showUserDetail(u2)

// 3- Readonly
interface Car{
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5 ERRO porque a propriedade readonly impede que a propriedade wheels seja alterada após a sua definição inicial, garantindo que o valor permaneça constante durante toda a vida útil do objeto.

// 4- Index Signature
interface CoorObject{
    [index: string]: number
}

let coords: CoorObject = {
    x: 10
}

coords.y = 15
coords.z = -7

console.log(coords)

// 5- Extending Types

interface Human{
    name: string
    age: number
}

interface  SuperHuman extends Human{
    superPower : string[]
}

const savio : Human = {
    name: "Savio",
    age: 22
}

console.log(savio)

const luffy: SuperHuman = {
    name: "Monkey D. Luffy",
    age: 16,
    superPower:["Gomu Gomu no Mi", "Gear Second", "Gear Fourth"]
}

console.log(luffy)
console.log(luffy.superPower[1])

//  6- Intersection Types
interface Character{
    name : string
}

interface Gun{
    type : string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold : HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)
console.log(arnold.caliber)

// 7- ReadOnlyArray
let myArray: ReadonlyArray<string> = ["Maçã","Laranja","Banana","Goiaba"]

//  myArray[4] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " +item)
})

myArray = myArray.map((item) =>{
    return `Fruta: ${item}`
})

console.log(myArray)

// myArray [0] = "uva"

// 8- Tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = [1, true, "teste" , 4,5]

type nameandAge = [string, number]

const anotherUser:nameandAge = ["Sávio" , 22]

console.log(anotherUser)
console.log(anotherUser[0])

anotherUser[0] = "Gabriel"
// anotherUser[1] = "Gabriel"
console.log(anotherUser)

// 9 - Tuplas com Readonly
function showNumbers(numbers : readonly [number, number, number]){
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
    console.log(numbers[2])
}

showNumbers([1,2,3])