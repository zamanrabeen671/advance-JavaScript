// const number = [1,2,3,4,5,6,7,8];
// for(i = 0; i < number.length; i++) {
//     if(number[i] > 5) {
//         break;
//     }
//     console.log(number[i]);
// }
const nums = [1,2,-3,4,-5,6,7,-8];
for(i = 0; i < nums.length; i++) {
    if(nums[i] < 0) {
        continue;
    }
    console.log(nums[i]);
}