const numbers = [10, 20, 30];
const totalSum = numbers.reduce(function(sum, number) {
    return sum + number;
},0);

console.log(totalSum);

var primaryColors = [
    {color:'red'},
    {color:'yellow'},
    {color:'blue'}
]

const colors = primaryColors.reduce(function (previous, primaryColor){
    previous.push(primaryColor.color)
    return previous;
},[]);

console.log(colors);

//Balancing Problem 

function balancedParens(string) {
    return !string.split("").reduce(function (previous, char) {
        if(previous <0) {return previous;}
        if(char === "(") {return ++previous;}
        if(char === ")") {return --previous;}
        return previous
    },0)
}

console.log(balancedParens("((()))"))