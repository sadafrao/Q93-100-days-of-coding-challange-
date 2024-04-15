// Q93
// find index of banana in an array and replace it mango
function replacemango(fruit : string[]) : void {
    const index = 
    fruit.indexOf("banana")
    if (index !== -1)
        fruit[index] = "mango";

}
let fruit : string[] = ["apple","banana","strawberry"];
replacemango(fruit);
console.log(fruit);
