const products = [
    {name:"A", type:"vegetable", quantity:0, price:1},
    {name:"B", type:"fruit", quantity:15, price: 15},
    {name:"C", type:"vegetable", quantity:30, price: 12},
    {name:"D", type:"fruit", quantity:4, price: 5}
]

const result = products.every(function(product){
    return product.price > 10;
})
console.log(result);

function Field(value) {
this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

const username = new Field("2cool");
const password = new Field("my_password");
const birthdate = new Field("10/10/2010")

// to validate every fields in one go 
const fields = [username, password, birthdate];
const isValid = fields.every(function (field) {
    return field.validate();
})
console.log(isValid)