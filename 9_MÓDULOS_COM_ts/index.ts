// 1 - Importacao de arquivos
import importGreet from "./greet";

importGreet()

// 2 - Importacao de variaveis
import {x} from "./variable"

console.log(x);

// 3 - Multiplas importações

import {a, b, myFunction} from"./multiple";

console.log(a);
console.log(b);

myFunction();

// 4 - Alias
import {someName as name} from "./chancename";

console.log(name)

// 5 - Importando tudo
import * as myNumbers from "./numbers"

console.log(myNumbers);

const nX = myNumbers.n1;

console.log(nX);

myNumbers.showNumbers();

// 6 - Importando tipos
import {Human} from "./mytype"

class User implements Human {
    name
    age

    constructor (name : string, age : number){
        this.name = name;
        this.age = age;
    }
}

const savio = new User("Sávio", 22)

console.log(savio)