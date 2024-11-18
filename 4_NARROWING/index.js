"use strict";
// 1- Type guard
function soma(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel realizar a soma!");
    }
}
soma("5", "59");
soma(12, 42.3);
soma("5", 6);
// 2- Checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "soma") {
            const soma = arr.reduce((i, total) => i + total);
            console.log(soma);
        }
        else if (operation === "multiplicacao") {
            const multiplicacao = arr.reduce((i, total) => i * total);
            console.log(multiplicacao);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
// operations([1,2,3]) ERRO PORQUE NENHUMA OPERAÇÃO FOI PASSADA
operations([1, 2, 3], "soma");
operations([2, 4, 8], "multiplicacao");
// 3- Operador instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const Ezequiel = new User("Ezequiel");
const Savio = new SuperUser("Savio");
console.log(Ezequiel);
console.log(Savio);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name},deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(Ezequiel);
userGreeting(Savio);
// 4- Operador in
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        if (raca) {
            this.raca = raca;
        }
    }
}
const layla = new Cachorro("Layla");
const menic = new Cachorro("Menic", "Shih tzu");
function showCachorroDetalhes(cachorro) {
    if ('raca' in cachorro) {
        console.log(`O cachorro(a) ${cachorro.nome} é da raça ${cachorro.raca}`);
    }
    else {
        console.log(`Cachorro(a) é um SRD`);
    }
}
showCachorroDetalhes(layla);
showCachorroDetalhes(menic);
