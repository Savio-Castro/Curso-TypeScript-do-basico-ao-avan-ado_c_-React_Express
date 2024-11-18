// 4 - map

const products = [
    {name: "Camisa", price: 10.90, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 49.99, category: "Eletro"},
    {name: "Fogão", price: 500.55, category: "Eletro"},
    {name: "Calça jeans", price: 50.90, category: "Roupas"}
]

products.map((products) =>{
    if(products.category === "Roupas"){
        products.onSale = true
    }
})

console.log(products)