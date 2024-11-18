// 1 - arrays
// Array do tipo Número
let numbers : number [] = [1, 2, 3,]

numbers.push(5)

console.log(numbers)
console.log(numbers[2])


// Array do tipo String
const nomes: string[] = ["Sávio","Sabrina"]

nomes.push("Miguel", "Maria")

console.log(nomes)
console.log(nomes[3])


// 2- Sintaxe de Arrays
const numeros: Array<number> = [100, 200, 300]

numeros.push(400)

console.log(numeros)
console.log(numeros[2])

// 3- Any
const arr1: any = [1, "Menic", true, [], {nome: "Paula"}]

arr1.push([1,2,3])

console.log(arr1)
console.log(arr1[1])

// 4- Paramentros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(4, 5)

// ERRO soma("a","b") não da para chamar por o a e b nesse caso estão como string

// 5- Retorno de Função
function greeting(name: string):string{
    return `Olá ${name}`
}

console.log(greeting("Sávio"))

// 6- Função anonima
setTimeout(function() {

    const sallary: number = 1000

    // ERRO console.log(parseFloat(sallary))

    // console.log(sallary)

}, 2000)

// 7- Tipos de objetos
function passarCoordenadas(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y:84.2}

passarCoordenadas(objCoord)
// ERRO passarCoordenada({nome: 1, sobrenome: 2})

const pessoaObj:{nome: string, sobrenome:string} = {nome: "Sávio", sobrenome:"Sousa"}

// 8- Propriedades opcionais
function mostrarNumeros(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}

mostrarNumeros(1, 2, 3)
mostrarNumeros(4, 5)
//mostrarNumeros(6)

// 9- Validando argumento opcional
function saudacaoAvancada(primeiroNome: string, ultimoNome? : string){

    if(ultimoNome !== undefined) {
        return`Olá, ${primeiroNome} ${ultimoNome}, tudo bem?`
    }

    return `Olá, ${primeiroNome}, tudo bem?`
}

console.log(saudacaoAvancada("Sávio" , "Sousa"))
console.log(saudacaoAvancada("Gabriel"))

// 10- union type
function showBalance(balance :string | number ){
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11- Avançando em union types
function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado"
    }

    return `A função do usuário é: ${role}`

}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12- Types alias
type ID =  string | number

function showID(id: ID){
    console.log(`O ID é: ${id}`)
}

showID(1)
showID("200")
showID(123)

// 13- Interface
interface Ponto {
    x: number
    y: number
    z: number
}

function showCoordenadas(obj:Ponto){
    console.log(`X:${obj.x} Y:${obj.y} Z:${obj.z}`)
}

const coordenadaObj: Ponto = {
    x:10,
    y:15,
    z:20,
}

showCoordenadas(coordenadaObj)

// 14- interface x type alias
interface Pessoa{
    nome: string
}
interface Pessoa{
    idade: number
}

const algumaPessoa: Pessoa = {nome :"Sávio", idade: 22}

console.log(algumaPessoa)


type tipoPessoa = {
    nome:string  
}
// type tipoPessoa = {
//     idade:number  
// } ERRO 


// 15- Literal types

let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left"| "right"|"center"){
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

// 16- Non null assertion operators

const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17- Bigint
let n: bigint

// n = 1

n = 1000n

console.log(n)

console.log(n +100n)

// 18- Symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)