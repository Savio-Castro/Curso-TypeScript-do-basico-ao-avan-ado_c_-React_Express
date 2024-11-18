// 8 - class
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productWithDiscount(discont){
        return this.price * ((100 - discont) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis verde", 120)

console.log(tenis.name);

console.log(tenis.productWithDiscount(20));

console.log(tenis.productWithDiscount(50));
