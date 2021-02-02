const number = [1,2,3,4,5,6,7,8];
// const part = number.slice(0,4); //start and end
const remove  = number.splice(2,2, 86,90); // start and count how many number



console.log(remove);
console.log(number);
const together = number.join(",");
console.log(together);