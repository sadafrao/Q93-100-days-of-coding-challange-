// Q93
// find index of banana in an array and replace it mango
function replacemango(fruit) {
    var index = fruit.indexOf("banana");
    if (index !== -1)
        fruit[index] = "mango";
}
var fruit = ["apple", "banana", "strawberry"];
replacemango(fruit);
console.log(fruit);
