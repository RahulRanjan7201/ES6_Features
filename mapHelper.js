//Map Returns the new array instead of mutating original array i.e chaning the new array 
// ForEach Change the original array
const cars = [{
    model:"SX", price:"Cheap"
},
{
    model:"VX", price:"Expensive"
}]
const prices = cars.map(function(car) {
   return car.price;
})
console.log(prices);
