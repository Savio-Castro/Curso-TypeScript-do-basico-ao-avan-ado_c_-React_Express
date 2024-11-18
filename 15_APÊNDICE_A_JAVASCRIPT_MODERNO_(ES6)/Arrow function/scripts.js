// 2 - Arrow Function

// Função tradicional para somar dois números
const sum = function sum(a, b) {
    return a + b;
}

// Arrow function com bloco: faz a mesma coisa que a função acima, 
// mas usa uma sintaxe mais curta e moderna
const arrowSum = (a, b) => {
    return a + b;
}

// Arrow function ainda mais simplificada: quando a função tem 
// apenas uma linha, podemos omitir as chaves e o "return"
const arrow2Sum = (a, b) => a + b;

console.log(sum(5, 5));       
console.log(arrowSum(5, 5)); 
console.log(arrow2Sum(5, 5));

const saudacao = (nome) => {
    if(nome){
        return 'Olá ' + nome + '!'
    } else {
        return 'Olá'
    }
}

console.log(saudacao("Sávio"))
console.log(saudacao())


const testeArrow = () => console.log('testou!')

testeArrow()

const user = {
    name: "Theo",
    sayUserName(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()