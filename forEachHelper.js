//create an array of numbers
const numbers = [1, 2, 3, 4, 5];
//create  a variable to hold the sum 
let sum = 0;
function adder(number) {
    sum += number;
}
//for Each 
numbers.forEach(adder);
console.log(sum);

