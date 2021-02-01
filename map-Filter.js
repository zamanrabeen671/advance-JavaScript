const number = [3,4,5,6,7];
// const output = []
// for(let i = 0; i < number.length;i++) {
//     const result = number[i] * number[i];
//     output.push(result);
// }

number.map(function(element, index, array) {
    console.log(element * element, index, array);
})
const result = number.map(x => x * x);
const operation = number.filter(x => x %2 == 0);
const operation2 = number.find(x => x %2 == 0);
console.log(operation);
console.log(operation2);
//console.log(output);