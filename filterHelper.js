const products = [
    {name:"A", type:"vegetable", quantity:0, price:1},
    {name:"B", type:"fruit", quantity:15, price: 15},
    {name:"C", type:"vegetable", quantity:30, price: 12},
    {name:"D", type:"fruit", quantity:4, price: 5}
]

//Filter the Result where type is vegetable , quantity is greater than 0 , price is less than 10
const filteredResult = products.filter(function(product)  {
    return product.type ==="vegetable" && product.quantity > 0 && product.price < 10;
})

console.log(filteredResult);

// 2nd Example 
// Use Case when you have to extract comments for particular post 

const post = {id:4, title:'New Post'}
const comments = [
    {postId:4, content:"awesome post"},
    {postId:3, content:"it was ok"},
    {postId:4, content:"neat"}
]

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    })
}
console.log(commentsForPost(post, comments));