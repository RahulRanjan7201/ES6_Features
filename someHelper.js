const products = [
    {name:"A", type:"vegetable", quantity:0, price:1},
    {name:"B", type:"fruit", quantity:15, price: 15},
    {name:"C", type:"vegetable", quantity:30, price: 12},
    {name:"D", type:"fruit", quantity:4, price: 5}
]

const result = products.some(function(product){
    return product.price > 10;
})
console.log(result);
