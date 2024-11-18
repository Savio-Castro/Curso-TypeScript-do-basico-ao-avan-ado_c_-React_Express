// 9 - herança
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


class ProductWithAtributes extends Product {
    constructor(name, price, color){
        super(name, price)
        this.colors = color
    }
    showColors(){
        console.log("As cores são:")
        this.colors.forEach((color) =>{
            console.log(color)
        })
    }
}

const hat = new ProductWithAtributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])
console.log(hat.name);

console.log(hat.productWithDiscount(30));

hat.showColors()