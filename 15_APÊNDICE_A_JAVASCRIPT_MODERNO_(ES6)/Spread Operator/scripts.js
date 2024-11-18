// 7 - spread operator
// exemplo 1
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

// exemplo2
const a4 = [0,...a1, 4]

console.log(a4)

// exemplo 3
const carName = {name: "Gol"}
const carBrand = {brand: "W"}
const otherInfos= {km: 1000000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos, whells :4}

console.log(car)
console.log(car[1])