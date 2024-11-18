"use strict";
// 1- Void
function withoudReturn() {
    console.log("Esta função não tem retorno!");
}
withoudReturn();
// 2- Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Savio");
preGreeting(greeting, "Camila");
// 3- Generic function
function primeiroElemento(array) {
    return array[0];
}
console.log(primeiroElemento([1, 2, 3]));
console.log(primeiroElemento(["a", "b", "c"]));
// console.log(primeiroElemento("Teste"))
function unirObjetos(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = unirObjetos({ name: "Savio" }, { age: 22, job: "Programer" });
console.log(newObject);
// 4- Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// console.log(biggestNumber("12",3)) Erro porque são dois valores diferentes
// console.log(biggestNumber(false)) ERRO porque só aceita valor como string ou number
// 5- Especificar tipo de argumentos
function juntarArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(juntarArray([1, 2, 3], [4, 5]));
console.log(juntarArray([1, 2, 3], ["teste", "testando"]));
// 6- Parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem ?`;
    }
    return `Olá ${name},tudo bem?`;
}
console.log(modernGreeting("Sávio"));
console.log(modernGreeting("Sávio", "Dr"));
// 7- Parâmetro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(12, 15));
// 8- Tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9- Tipo never
// function mostrarErroMensagem(mensagem: string): never{
//     throw new Error(mensagem)
// }
// mostrarErroMensagem("Algum erro!")
// 10- Rest operator
function somarTodos(...n) {
    return n.reduce((number, soma) => soma + number);
}
console.log(somarTodos(20, 40, 60, 80, 100));
console.log(somarTodos(20, 40, 60));
// console.log(somarTodos("texto")) Erro porque é uma string e só aceita valor numérico
//  11- Destructuring como parâmetros
function mostrarDetalhesProduto({ nome, preco }) {
    return `O nome do produto é ${nome} e ele custa R$ ${preco}`;
}
const produto = { nome: "Arroz", preco: 12.00 };
console.log(mostrarDetalhesProduto(produto));
