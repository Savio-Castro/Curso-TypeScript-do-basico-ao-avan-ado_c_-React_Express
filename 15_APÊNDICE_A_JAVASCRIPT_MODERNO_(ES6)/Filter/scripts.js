// 3 - filter

const arr = [1, 2, 3, 4, 5]

const highNumber = arr.filter((n) =>{
    if(n >= 3){
        return n 
    } 
})

console.log(highNumber)

const users = [
    {name: "Sávio", available: true},
    {name: "Pedro", available: false}, 
    {name: "Gabriel", available: true},
    {name: "Erik", available: false},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)